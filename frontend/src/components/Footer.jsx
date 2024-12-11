import '../styles/footer.css'
const Footer = () => {
    return (
        <>
            <footer>
                
                <div className='footer' >
                    <h4 className='sub-headings'>Elevate Academy</h4>
                    <p className='sub-para'>Empowering learners of all ages to acquire essential skills for personal and professional growth.</p>
                </div>
                <div>
                    <h4 className='sub-headings' >Quick Links</h4>
                    <ul>
                        <li className='footer-nav'>Courses</li>
                        <li className='footer-nav'>About Us</li>
                        <li className='footer-nav'>Contact</li>
                    </ul>
                    </div>
                    <div>
                    <h4 className='sub-headings' >Connect With Us</h4>
                    <ul>
                        <a className='footer-links'>linkedIn</a>
                        <a className='footer-links'>Twitter</a>
                        <a className='footer-links'>Facebook</a>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Footer