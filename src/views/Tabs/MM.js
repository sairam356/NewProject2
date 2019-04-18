import React from 'react';

import classnames from 'classnames';
import axios from 'axios';
import { Container,Alert,Nav,NavItem,FormGroup,Label, Badge,Row,Col,Card,CardHeader,FormText,CardBlock,Table,Button,Modal, ModalHeader, ModalBody, ModalFooter,Input, InputGroup, InputGroupAddon } from "reactstrap";
export default class MM extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
      displayTable:false,
      displayAdvanceNoticeTable:false
    };
   this.mm={
       market:'',
       sloc:''
   }
   this.adavanceShipNotice =[];
    
    this.handleChange = this.handleChange.bind(this);
    this.showTables = this.showTables.bind(this);
    this.saveAsDefault = this.saveAsDefault.bind(this);
  }
 
 handleChange(event){
     this.mm[event.target.name] = event.target.value;
     this.setState(this.mm);
      this.setState({
                    displayTable: false
                });
 }

   saveAsDefault(){
       
   }


 showTables(event){
   event.preventDefault();
   if(this.mm.market!='' || this.mm.sloc!=''){
         this.setState({
                    displayTable: true
                });
       this.data = {};
   this.data.plant = this.mm.market;
   this.data.sloc = this.mm.sloc; 
   axios.get("https://jsonplaceholder.typicode.com/posts?userId=1").then((response) => {
     /*if(response.statusMessage=="Success"){
          if(response.goodsReceiptGetResponse.length>0){
               this.setState({
                   displayAdvanceNoticeTable:true
               })
          }
           this.adavanceShipNotice = response.goodsReceiptGetResponse;

     }*/
   

    });
   }

  
   console.log(this.mm.market);

 }

  render() {
    return (
  <div className="disburse_width mm_bottom"> 
                    <Row className="test">
                       <Col md="2">
                           <Label for="exampleEmail" >Market :</Label>
                        </Col> 
                        <Col md="4">
                            <InputGroup>
                            <Input type="select" className="w-100" value={this.mm.market} name="market" onChange={this.handleChange} id="ccmonth">
                               <option value="">Select </option>
                               <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="12">12</option>
                            </Input>
                            
                            </InputGroup>
                        </Col>     
                        <span id="passwordLengthErr" className="colorvalidation"> </span>
                        <Col md="2">
                            <Button color="primary" style={{backgroundColor: '#a70606', borderColor: '#a70606'}} onClick={this.saveAsDefault}  >Save as Default</Button>
                        </Col> 
                    </Row>
                    <Row>
                       <Col md="2">
                           <Label for="exampleEmail" className="pt-1">Plant/Sloc :</Label>
                        </Col> 
                        <Col md="4">
                            <InputGroup>
                            <Input type="select" className="w-100" value={this.mm.sloc} name="sloc" onChange={this.handleChange} id="ccmonth">
                               <option value="">Select </option>
                               <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="12">12</option>
                            </Input>
                            
                            </InputGroup>
                        </Col>     
                        <span id="passwordLengthErr" className="colorvalidation"> </span>
                        <Col md="2">
                                <Button  color="primary" style={{backgroundColor: '#a70606', borderColor: '#a70606'}}  className="save_button" onClick={this.showTables}>Save</Button>
                            
                        </Col> 
                    </Row>

                  {this.state.displayTable? <div>

                    <p className="test"  style={{textAlign: 'left',marginLeft: '3rem',color: '#a60606'}}> <b> List  of Disbursements</b> </p>
                     <Table bordered style={{marginLeft: '3rem'}}>
                                <thead style={{backgroundColor: '#e2e1e1'}}>
                                  <tr>
                                    <th>#</th>
                                    <th>Disbursement1</th>
                                    <th>Disbursement2</th>
                                    <th>Disbursement3</th>
                                    <th>Disbursement4</th>
                                    <th>Disbursement5</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>145239</td>
                                    <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>145239</td>
                                    <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>145239</td>
                                    <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">4</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>145239</td>
                                    <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">5</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>145239</td>
                                    <td>145239</td>
                                  </tr>
                                </tbody>
                              </Table>

                                 <p className="test" style={{textAlign: 'left',marginLeft: '3rem',color: '#a60606'}}> <b>Goods Receipt</b> </p>
                     <Table bordered style={{marginLeft: '3rem'}}>
                                <thead style={{backgroundColor: '#e2e1e1'}}>
                                  <tr>
                                    <th>#</th>
                                    <th>Receipt1</th>
                                    <th>Receipt2</th>
                                    <th>Receipt3</th>
                                    <th>Receipt4</th>
                                    <th>Receipt5</th>
                       
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>22/09/2018</td>
                                    <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                    <td>22/09/2018</td>
                                     <td>145239</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                      <td>1253</td>
                                    <td>145239</td>
                                  </tr>
                                   <tr>
                                    <th scope="row">4</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                      <td>1253</td>
                                    <td>145239</td>
                                  </tr>
                                   <tr>
                                    <th scope="row">5</th>
                                      <td>1253</td>
                                    <td>145239</td>
                                    <td>22/09/2018</td>
                                      <td>1253</td>
                                    <td>145239</td>
                                  </tr>
                                </tbody>
                              </Table>
                      { this.state.displayAdvanceNoticeTable ?<div>
                                 <p className="test" style={{textAlign: 'left',marginLeft: '3rem',color: '#a60606'}}> <b>Adavnce Ship Notice</b> </p>
                     <Table bordered style={{marginLeft: '3rem'}}>
                                <thead style={{backgroundColor: '#e2e1e1'}}>
                                  <tr>
                                    <th>#</th>
                                    <th>Notice1</th>
                                    <th>Notice2</th>
                                    <th>Notice3</th>
                                    <th>Notice4</th>
                                      
                                     <th>Notice5</th>
                                     <th>Notice6</th>
                                     <th>Notice7</th>
                                     <th>Notice8</th>
                                     <th>Notice9</th>
                                     <th>Notice10</th>
                                     <th>Notice11</th>
                                     <th>Notice12</th>
                                     <th>Notice13</th>
                                     <th>Notice14</th>
                                     <th>Notice15</th>
                                     <th>Notice16</th>
                                     <th>Notice17</th>
                                     <th>Notice18</th>
                                     <th>Notice19</th>
                                     <th>Notice20</th>
                                  </tr>
                                </thead>
                                 <tbody>
                            { this.adavanceShipNotice.map((item, index) => (     
                                  <tr>
                                    <th scope="row">{item.asnId}</th>
                                    <td>{item.transcationTime}</td>
                                    <td>{item.modifiedBy}</td>
                                    <td>{item.asnSentDate}</td>
                                     <td>{item.plant}</td>
                                    <td>{item.storageLocation}</td>
                                    <td>{item.materialId}</td>
                                     <td>{item.reelId}</td>
                                     <td>{item.qty}</td>
                                    <td>{item.deliveryDateEst}</td>
                                    <td>{item.shipVendor}</td>
                                    <td>{item.shipTrackingNumber}</td>
                                    <td>{item.poNumber}</td>
                                    <td>{item.poLineNumber}</td>
                                    <td>{item.poCreatedBy}</td>
                                    <td>{item.poCreationDate}</td>
                                    <td>{item.asnDeliveryNumber}</td>
                                    <td>{item.asnDeliveryLineNumber}</td>
                                    <td>{item.receiptedQty}</td>
                                     <td>{item.uid}</td>
                                     <td>{item.status}</td>
                                  </tr>
                               ))}  
                                </tbody>
                              </Table></div>:''} </div>:''}


  </div>
    );
  }
}
