  
class Fetch {
    async getCurrent() {
      const myKey = 'b85047ff65336fa006bc7a89fd300ed3';
      const lat = 34.783411;
      const lon = -76.598426;
  
    //   make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}`
      );
    // const response = await fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    //   );
       
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }