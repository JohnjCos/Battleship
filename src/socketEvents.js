import store from './store';
import {API_BASE_URL} from './config'

const socket = new WebSocket("ws" + API_BASE_URL.slice(4) + "/ws");
socket.onopen = () => {console.log("Socket connection established.");};
socket.onmessage = (ev) => {store.dispatch({type: "WEBSOCKET", data: JSON.parse(ev.data)});};

export default function socksend(type, data) {
	socket.send(JSON.stringify({type, data}));
}
window.socksend= socksend

