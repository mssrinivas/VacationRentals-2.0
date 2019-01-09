

import React,{Component} from 'react';
import './ShowMessages.css';
import Link from 'react-router-dom/Link';

var len=0;
class ShowMessages extends Component {

    constructor(props) {
    super(props);
    this.state = {
      messagelist : [],
      mess : '',
      messageText : ''
    }
  }

  
 showAllMessages = (value)=> {
  localStorage.setItem("CurrentProperty",value);
  var finalstring = ''
  var label = ''
  var str = ''
  const request = async () => {
    console.log("ID IS ", value)
    var url = 'http://localhost:4004/messages'
    await this.setState({mess : ''})
    await console.log("AWAIT RESP ", this.state.mess)
    await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username : localStorage.getItem("usernamey"),
            prop_id : value
        })
      })
      .then(response => response.json())
      .then(messages => { 
        console.log("CHeck", messages[0].Messages.length)
        console.log("CHeck", messages[0].Messages.length)
    // console.log("Messages are",messages[0])
    // console.log(" --- " ,messages[0].Messages.length)
     len = messages[0].Messages.length
     console.log("Length is " + len)
   if(len)
   {
    for(var i=0;i< messages[0].Messages.length;i++)
    {
      str= ''
      if(i%2 === 0)
      {
        label = "You : "
      }
      else{

        label = "Owner : "
      }
      str += messages[0].Messages[i].message;
      label += str
      label += "\n"
      finalstring += label
      console.log("Final", finalstring)
      this.setState({mess : finalstring})
    }
    console.log("Update as", finalstring)
     this.setState({NoMessagestoShow : false});
   }
   else
   {
       this.setState({NoMessagestoShow : true});
   } 
 })
 await this.setState({mess : finalstring})
 await console.log("AWAIT RESP ", this.state.mess)

}
request(); 
  }

  newField = () => {
    const request = async () => {
    await this.setState({mess:this.state.mess})
    }
  request();  

  }

  onSendMessage = (event) => {
    this.setState({messageText : event.target.value})
  }

  onSubmitMessage = () => {
    console.log("CAME HERE")
    var url = 'http://localhost:4004/sendmessage'
    var id = localStorage.getItem("CurrentProperty")
    var name = localStorage.getItem("usernamey")
    var ownername = this.props.owner
 fetch(url, {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
             property_id: id ,
             username: name,
             message : this.state.messageText,
             ownername : ownername	  
         })
     })
     .then(response => {
     if(response.status === 400)
     {
         alert("Message not sent")
     }
     else
     {
         alert("Message sent successfully")
     }
     })
    }
  render()
  {
      return (
        <div>
           <div class="card3-2 reducesize" >
<div class="item">
<button type="button" class="card-2" data-toggle="modal" data-target="#exampleModal"  onClick={()=>this.showAllMessages(this.props.prop_id)} data-whatever="@getbootstrap"><i class="mail icon"> <p class="boldy">Messages</p></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Property ID : {this.props.prop_id} Property Owner : {this.props.ownername}</button>
</div>
</div>
<br />
<br />
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">

    
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Inbox</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>


      <div class="modal-body">
        <form>
          <div class="form-group">
            <button type="button" class="btn" onClick={()=>this.showAllMessages(this.props.prop_id)}>Get All Messages</button>
            <textarea class="form-control" id="message-text" value={this.state.mess}></textarea>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">New Message:</label>
         
            <textarea class="form-control" id="message-text" onChange = {this.onSendMessage}></textarea>
          </div>
        </form>
      </div>


      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" >Close</button>
        <button type="button" class="btn btn-primary" onClick={this.onSubmitMessage}>Send message</button>
      </div>


    </div>
    </div>
  </div>
  </div>
      );
    }
}

export default ShowMessages;