import React from 'react';
import styled from 'styled-components'
import { DropZoneContext } from '../../core/context';
import UploadService from '../../services/UploadService/UploadService';

const Box = styled.div`
  width: 100%;
  color: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AddPhotos = styled.button`
  border-radius: 50px;
  border: 0;
  height: 52px;
  width: ${props => props.small ? '50%' : '100%'};
  padding: 0;
  left: 0;
  right: 0;
  margin: auto;
  color: #000000;
  background: #E5F77D;
  font-size: 1.2rem;
`
const GetQR = styled.button`
  border-radius: 50px;
  border: 0;
  height: 52px;
  width: 100%;
  padding: 0;
  left: 0;
  right: 0;
  margin: auto;
  color: #000000;
  background: #7BC950;
  font-size: 1.2rem;
`
const ButtonsBox = styled.div`
  display: flex;
  position: fixed;
  padding: 12px;
  padding-bottom: 18px
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`
const Separator = styled.div`
  width: 0;
  margin-left: 12px;
`
const QRCODE = styled.img`
  max-width: 100%;
  left: 0;
  right: 0;
  top: 44px;
  margin: auto;
  position: absolute;
  border: solid 20px #fff;
  box-sizing: border-box;
`
const Info = styled.h3`
  color: #fff;
  margin: 0;
  text-align: center;
  padding: 12px 6px;
  font-size: 0.875rem;
`
const Back = styled.button`
  background: none;
  color: #fff;
  border: none;
  font-size: 1rem;
  text-align: right;
  white-space: nowrap;
`
const UploadBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`

class UserEnd extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      qr: false
    }

    this.fuse = new UploadService();
    this.fuseID = this.fuse.registerSubscriberPopulator(() => this.forceUpdate());

    this.addPhotos = this.addPhotos.bind(this)
    this.generateQR = this.generateQR.bind(this)
    this.getQR = this.getQR.bind(this)
    this.getView = this.getView.bind(this)
    this.getUploadStats = this.getUploadStats.bind(this)
  }
  
  addPhotos(pms = {}) {
    return <AddPhotos small={pms.small} onClick={() => this.dropZoneContext.dropzoneRef.current.open()} tabIndex="0" type="button">{pms.small ? '+ Add' : '+ Add Photos'}</AddPhotos>
  }

  generateQR() {
    document.getElementById("qrcode").innerHTML = ''

    const qrcode = new window.QRCode(document.getElementById("qrcode"), {
      text: this.fuse.getGlobalState().newAlbumID,
      width: 512,
      height: 512,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : window.QRCode.CorrectLevel.H
    });

    setTimeout(() => {
      this.setState({
        qr: qrcode._el.querySelector('img').src
      })
    }, 178)
  }

  getQR() {
    return <GetQR onClick={() => this.generateQR()} tabIndex="0" type="button">Get your ticket</GetQR>     
  }

  goBack() {
    const goback = () => {
      window.location.reload()
    }

    return <Back onClick={goback} tabIndex="0" type="button"> ← Start again</Back>  
  }
  
  getUploadStats() {
    const { files } = this.fuse.getGlobalState();
    const [uploadedFiles] = this.fuse.countUploadedFiles();
    return (
      <UploadBox>
        <div class="sk-fading-circle" style={{ display: uploadedFiles - files.length ? 'block' : 'none'}}>
          <div class="sk-circle1 sk-circle"></div>
          <div class="sk-circle2 sk-circle"></div>
          <div class="sk-circle3 sk-circle"></div>
          <div class="sk-circle4 sk-circle"></div>
          <div class="sk-circle5 sk-circle"></div>
          <div class="sk-circle6 sk-circle"></div>
          <div class="sk-circle7 sk-circle"></div>
          <div class="sk-circle8 sk-circle"></div>
          <div class="sk-circle9 sk-circle"></div>
          <div class="sk-circle10 sk-circle"></div>
          <div class="sk-circle11 sk-circle"></div>
          <div class="sk-circle12 sk-circle"></div>
        </div>
        {`${uploadedFiles}/${files.length}`}
      </UploadBox>
    )
  }

  getView() {
    if (this.state.qr) {
      return (
        <React.Fragment>
          <Info>Scan your ticket to play music</Info>
          <QRCODE src={this.state.qr} />
          <ButtonsBox style={{flexDirection: 'row-reverse'}}>{this.goBack()}</ButtonsBox>
        </React.Fragment>
      )
    }

    if (this.fuse.getGlobalState().files.length) {
      return (
        <React.Fragment>
          {this.getUploadStats()}
          <ButtonsBox>
            {this.addPhotos({ small: true })}
            <Separator />
            {this.getQR()}
          </ButtonsBox>
        </React.Fragment>
      )
    }
  
    return <ButtonsBox>{this.addPhotos()}</ButtonsBox>
  }

  componentWillUnmount() {
    this.fuse.unregisterSubscriberPopulator(this.fuseID);
  }

  render () {
    return (
      <DropZoneContext.Consumer>
        {(context) => {
          this.dropZoneContext = context;

          return (
            <React.Fragment>
              {this.getView()}
            </React.Fragment>
          )
        }}
      </DropZoneContext.Consumer>
    )
  }
}

export default UserEnd;
