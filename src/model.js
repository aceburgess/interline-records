// import Lokka from 'lokka';
// import Transport from 'lokka-transport-http';

// export default class InterlineModel {

// 	constructor() {
// 		this.client = new Lokka({
// 			transport: new Transport('http://local-dev-application.com:8000/graphql')
// 		});

// 		this.dataPromise = this.client.query(`
// 			{
// 			  allArtists {
// 			    edges {
// 			      node {
// 			        id
// 			        name
// 			      }
// 			    }
// 			  }
// 			}
// 		`).then(res => res.allArtists);
// 	}

// 	allArtists() {
// 		return "Hello";
// 	}
// }