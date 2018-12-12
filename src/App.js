import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPaymentsRequest } from './actions';
import { Table, Icon, Container, Input, Divider, Header, Select, Form, Button } from 'semantic-ui-react'
import moment from 'moment'
import sortBy from 'sort-by'

const fields = [
  { key: 'm', text: 'Date', value: 'Date' },
  { key: 'f', text: 'Amount', value: 'Amount' },
]
const filters = [
  { key: 'a', text: 'Less Than', value: 'lt' },
  { key: 'b', text: 'Equal To', value: 'eq' },
  { key: 'c', text: 'More Than', value: 'mt' },
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: [],
      sortColumn: null,
      inverse: false,
      editID: null
    };
    this.sortList = this.sortList.bind(this);
    this.filterList = this.filterList.bind(this);
    this.editDescription = this.editDescription.bind(this);
    this.updatePayment = this.updatePayment.bind(this);
  }
  componentDidMount() {
    this.props.fetchPayments();
  }
  componentDidUpdate(prevProps) {
    if (this.props.payments.length !== prevProps.payments.length) {
      this.setState(state => ({
        payments: this.props.payments.sort(sortBy('Name')),
        sortColumn: 'Name'
      }))
    }
  }
  sortList(column) {
    const sortColumn = this.state.inverse ? column : '-' + column
    this.setState(state => ({
      payments: state.payments.sort(sortBy(sortColumn)),
      inverse: !state.inverse,
      sortColumn: column
    }))
  }
  filterList(e) {
    const text = e.target.value.toUpperCase();
    this.setState(state => ({
      payments: this.props.payments.filter(p => p.Name.toUpperCase().includes(text) || p.Description.toUpperCase().includes(text))
    }))
  }
  editDescription(e) {
    const editID = e.target.id;
    this.setState(state => ({
      editID
    }))
  }
  updatePayment(payment){
    this.setState(state => ({
      editID:null
    }))
  }
  render() {
    return (
      <Container>
        <Divider horizontal>
          <Header as='h4'>
            Payments
          </Header>
        </Divider>
        <Input focus placeholder='Search...' onChange={this.filterList} style={{ float: 'right' }} />
        <br/><br/>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name<Icon style={{ float: 'right' }} link name="arrows alternate vertical" onClick={() => this.sortList('Name')} /></Table.HeaderCell>
              <Table.HeaderCell>Description<Icon style={{ float: 'right' }} link name="arrows alternate vertical" onClick={() => this.sortList('Description')} /></Table.HeaderCell>
              <Table.HeaderCell>Date<Icon style={{ float: 'right' }} link name="arrows alternate vertical" onClick={() => this.sortList('Date')} /></Table.HeaderCell>
              <Table.HeaderCell>Amount<Icon style={{ float: 'right' }} link name="arrows alternate vertical" onClick={() => this.sortList('Amount')} /></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.payments.map((payment, i) => (
              <Table.Row key={i}>
                <Table.Cell>{payment.Name}</Table.Cell>
                <Table.Cell>
                  {this.state.editID !== payment.ID &&
                    <div>
                      {payment.Description}
                      <Icon style={{ float: 'right' }} link name="edit" onClick={this.editDescription} id={payment.ID} />
                    </div>
                  }
                  {this.state.editID === payment.ID &&
                    <div>
                      <Input fluid size='mini' value={payment.Description} >
                         <input />
                        <Button type='submit' icon="save" onClick={() => this.updatePayment(payment)} />
                        <Button type='submit' icon="cancel" onClick={this.editDescription}/>
                      </Input>
                    </div>
                  }
                </Table.Cell>
                <Table.Cell textAlign='center'>{moment(payment.Date).format('MM-DD-YYYY HH:MM:ss')}</Table.Cell>
                <Table.Cell textAlign='right'>{payment.Amount}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>

    );
  }
}
const mapStateToProps = (state) => ({
  payments: Object.values(state.payments)
});
const mapDispatchToProps = dispatch => {
  return {
    fetchPayments: () => {
      dispatch(fetchPaymentsRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
