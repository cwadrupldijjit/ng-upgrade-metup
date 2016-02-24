import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

interface ProfileInterface {
	id?: number;
	name: string;
	age: number;
	favoriteFood: string;
	image?: string;
}

class Profile implements ProfileInterface {
	interests: string[] = [];
	id: number = -1;
	img: string = '/common-assets/generic-avatar.png';
	
	constructor(public name: string = 'Eleventh Doctor', 
				public age: number = 1245,
				public favoriteFood: string = 'Fish Fingers and Custard') { }
}


@Injectable()
class ProfileService {
	profiles: Profile[] = [];
	
	constructor(public http: Http) {}
	
	getMe() {
		return this.http.get('/api/profiles/me')
						.map((response) => response.json());
	}
	
	getCurrentProfiles() {
		return this.http.get('/api/profiles/current')
						.map((response) => this.profiles = response.json());
	}
	
	getProfile(id) {
		return this.http.get('/api/profiles/' + id)
						.map((response) => response.json());
	}
	
	saveProfile(profile) {
		return this.http.post('/api/profiles/add', profile)
						.map((response) => {
							this.profiles.push(response.json());
							return response.json();
						});
	}
	
	saveInterest(interest: string, profileId, index) {
		let url = '/api/profiles/' + profileId + '/interests';
		let data = JSON.stringify({interest});
		let headers = new Headers({
			'Content-Type': 'application/json'
		});
		console.log(data);
		if (index !== 'new') {
			url += '?index=' + index;
		}
		return this.http.post(url, data, {
											 headers
										 })
						.map((response) => response.json());
	}
	
	deleteInterest(interest, profileId) {
		return this.http.delete('/api/profiles/' + profileId + '/interests?q=' + interest)
						.map((response) => response.json());
	}
}

export { ProfileService, Profile, ProfileInterface };