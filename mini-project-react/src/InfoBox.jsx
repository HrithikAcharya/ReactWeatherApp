import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import "./InfoBox.css";
export default function InfoBox({info}){
    const initialUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8q-4p7T-kQ9aQdzaf546Lt8B5yEDPrIbblisjx27eA_b_oD0Gbzu-JFNVbh-V-Ql0iDE&usqp=CAU";
    const HOT_URL = "https://scopeblog.stanford.edu/wp-content/uploads/2022/07/AdobeStock_268489083-scaled.jpeg";
    const COLD_URL = "https://media.istockphoto.com/id/477839825/photo/cold-weather-ahead-road-warning-sign.jpg?s=612x612&w=0&k=20&c=uKKmquH-hk_h8jBuLmHFLsa4HJWgYIevFCzY6ShvKes=";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
    return(
        <div className='InfoBox'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image={info.humidity>80? RAIN_URL: info.temp> 15 ? HOT_URL:COLD_URL} title="weather"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}&nbsp;
                        {
                            info.humidity>80? <WaterDropIcon/>: info.temp> 15 ? <WbSunnyIcon/>:<AcUnitIcon/>
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as {info.weather} and feels like = {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}