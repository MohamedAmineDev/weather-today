import '../App.css';
function WeatherLine({link,text,v}){
    return (
        <section className='res'>
            
            <span>{text}</span>
            <span>:</span>
            <span>{v}</span>
        </section>
    );
}
export default WeatherLine;