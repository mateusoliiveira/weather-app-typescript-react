import axios from 'axios';

export async function Api(location: string): Promise<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=pt_br&appid=914e788f6ff26a8983eda78dd229acce`
    return await axios.get(url)
}