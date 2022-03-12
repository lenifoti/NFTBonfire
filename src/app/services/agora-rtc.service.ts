// github.com/divanov11/group-video-chat -->

import { Injectable } from '@angular/core';
import AgoraRTC from 'agora-rtc-sdk-ng';

@Injectable({
  providedIn: 'root'
})
export class AgoraRtcService {

  constructor() { }

  APP_ID: any = "383d84e52975434d9b89329118caf7a3";
  TOKEN: any = "006383d84e52975434d9b89329118caf7a3IAC8lX8UD3YAOTabVmiTHgSr9EEy4mTnqaPHJMwvurQAA2TNKL8AAAAAEAAJCiqY5RIsYgEAAQDjEixi";
  CHANNEL: any = "main";

  client: any = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

  localTracks: any = [];
  remoteUsers: any = {};

  joinAndDisplayLocalStream = async () => {

    this.client.on('user-published', this.handleUserJoined);

    this.client.on('user-left', this.handleUserLeft);

    let UID = await this.client.join(this.APP_ID, this.CHANNEL, this.TOKEN, null);

    this.localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

    this.localTracks[1].play(`user-${UID}`);

    await this.client.publish([this.localTracks[0], this.localTracks[1]]);
  }

  joinStream = async () => {
    await this.joinAndDisplayLocalStream();
    document.getElementById('join-btn').style.display = 'none';
  }


  handleUserJoined = async (user, mediaType) => {
    this.remoteUsers[user.uid] = user;
    await this.client.subscribe(user, mediaType);

    if (mediaType === 'audio') {
      user.audioTrack.play();
    }
  }

  handleUserLeft = async (user) => {
    delete this.remoteUsers[user.uid]
  }

  leaveAndRemoveLocalStream = async () => {
    for (let i = 0; this.localTracks.length > i; i++) {
      this.localTracks[i].stop()
      this.localTracks[i].close()
    }

    await this.client.leave()
  document.getElementById('join-btn').style.display = 'block'
  }

  toggleMic = async (e) => {
    if (this.localTracks[0].muted) {
      await this.localTracks[0].setMuted(false)
      e.target.innerText = 'Mic on'
      e.target.style.backgroundColor = 'cadetblue'
    } else {
      await this.localTracks[0].setMuted(true)
      e.target.innerText = 'Mic off'
      e.target.style.backgroundColor = '#EE4B2B'
    }
  }

}
