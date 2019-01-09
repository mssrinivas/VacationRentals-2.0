/*import React,{Component} from 'react';


const PropertyPhotos = (props) => {

  const onDrop = (acceptedFiles, rejectedFiles) => {
    var photos = [...this.state.photos];
    console.log("acceptedFiles", acceptedFiles);
    console.log("this.state.photos", this.state.photos);
    photos.push(acceptedFiles);
    this.setState({
      photos: photos,
      isUploaded: true,
      showPhotos: true
    });
    console.log("photos", photos);
}
}
export default PropertyPhotos;*/
import React, { Component } from "react";
import Dropzone from "react-dropzone";
import filesize from "filesize";
import onDrop from "./Photos"
import './PropertyPhotos.css'

class PropertyPhotos extends Component{
	constructor(props) {
    	super(props);
  	}

render() {
  return (
  	<div class="shadowingcontainer">
      <div class="shadowingcontainerphotos">
      {console.log("LOADED PHOTOS")}
        <Dropzone
          className="file-upload-area"
          onDrop={files => this.props.onDrop(files)}
        >
          <div className="space" />
          <div>
            <h1>Drop photos here</h1>
          </div>
          <div className="space" />
          <h1 className="photoText">Add up to 50 photos of your property</h1>
          <hr className="hr" />

          <div>
            {" "}
            <div className="btn btn-plain btn-file-uploader">
              <button className="btn-upload">Select Photos to upload</button>
            </div>
          </div>
          <div>
            {" "}
            <p className="">
              You can choose to upload more than one photo at a time.
            </p>
          </div>
        </Dropzone>
        {this.props.isUploaded && (
          <table className="table-upload">
            <tbody className="table-upload-body">
              {this.props.photos.map(data => (
                <tr
                  key={this.props.photos.indexOf(data)}
                  className="table-upload-row"
                >
                  <td className="table-upload-row-preview">
                    <img
                      className="preview-image"
                      src={
                        data[0].type === "application/pdf"
                          ? "abcd"
                          : URL.createObjectURL(data[0])
                      }
                      alt=""
                    />
                  </td>
                  <td className="table-upload-row-name">
                    <span>{data[0].name}</span>
                  </td>
                  <td className="table-upload-row-size">
                    {filesize(data[0].size)}
                  </td>
                  <td className="table-upload-row-delete">
                    <button
                      value={data[0].name}
                      className="btn btn-danger btn-small"
                      onClick={event => {
                        this.props.handleDeleteFile(event, data[0].name);
                      }}
                    >
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      </div>
  );
};
}

export default PropertyPhotos;