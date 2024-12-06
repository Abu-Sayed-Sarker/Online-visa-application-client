import img1 from '../../assets/school-books-young-adult-education.jpg'
import img2 from '../../assets/Torist.jpg'
import img3 from '../../assets/note-map-book-pen.jpg'
import { Fade, Slide } from 'react-awesome-reveal';
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[90vh]">
                    <div className="w-full relative">
                        <img
                            src={img1}
                            className="w-full  h-[90vh]" />
                        <div className='absolute top-0 w-full backdrop-blur-sm h-[90vh]'>
                            <Slide direction='down'>
                                <h1 className='lg:pt-40 pt-56 uppercase lg:text-9xl text-5xl font-bold text-pink-600 text-center'>Study Abroad</h1>
                            </Slide>
                            <Fade cascade delay={2.0}>
                                <p className='lg:text-4xl lg:px-0 px-4 text-xl text-center max-w-6xl text-pink-400 mx-auto'>Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor</p>
                            </Fade>

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle border bg-transparent">❮</a>
                        <a href="#slide2" className="btn btn-circle border bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[90vh]">
                    <div className="w-full relative">
                        <img
                            src={img2}
                            className="w-full  h-[90vh]" />
                        <div className='absolute top-0 w-full backdrop-blur-sm h-[90vh]'>
                            <Slide direction='down'>
                                <h1 className='lg:pt-40 pt-56 uppercase lg:text-9xl text-5xl font-bold text-pink-600 text-center'>Immigration</h1>
                            </Slide>
                            <Fade delay={2.0}>
                                <p className='lg:text-4xl lg:px-0 px-4 text-xl text-center max-w-6xl text-pink-400 mx-auto'>Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor</p>
                            </Fade>

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle border bg-transparent">❮</a>
                        <a href="#slide3" className="btn btn-circle border bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[90vh]">
                    <div className="w-full relative">
                        <img
                            src={img3}
                            className="w-full  h-[90vh]" />
                        <div className='absolute top-0 w-full backdrop-blur-sm h-[90vh]'>
                            <Slide direction='down'>
                                <h1 className='lg:pt-40 pt-56 uppercase lg:text-9xl text-5xl font-bold text-pink-600 text-center'>Immigration</h1>
                            </Slide>
                            <Fade delay={2.0}>
                                <p className='lg:text-4xl lg:px-0 px-4 text-xl text-center max-w-6xl text-pink-400 mx-auto'>Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor</p>
                            </Fade>

                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle border bg-transparent">❮</a>
                        <a href="#slide1" className="btn btn-circle border bg-transparent">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;