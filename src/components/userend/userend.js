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
    return <GetQR onClick={() => this.generateQR()} tabIndex="0" type="button">Get your pass</GetQR>     
  }

  goBack() {
    const goback = () => {
      this.fuse.clearAll()
      this.setState({
        qr: null
      })
    }

    return <Back onClick={goback} tabIndex="0" type="button"> ← Start again</Back>  
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
        <ButtonsBox>
          {this.addPhotos({ small: true })}
          <Separator />
          {this.getQR()}
        </ButtonsBox>
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
