/**
 * Fetch photos from the API
 */
async function callAPI() {
	try {
		let response = await fetch('https://vanillajsacademy.com/api/photos.json');
		if (!response.ok) throw response;
		let data = await response.json();
		return data;	
	} catch(error) {
		console.warn(error);
		return [];
	}
}


export {callAPI};