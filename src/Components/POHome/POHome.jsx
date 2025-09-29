import React, { useState, useEffect } from 'react'; 
import './POHome.css';
import Grooming from '../../Assets/Grooming.png';
import Lodging from '../../Assets/Lodging.png';
import Veterinary from '../../Assets/Veterinary.png';
import Transpo from '../../Assets/Transpo.png';
import PetSupplies from '../../Assets/PetSupplies.png';
import Carousel1 from '../../Assets/Carousel1.png';
import Carousel2 from '../../Assets/Carousel2.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const POHome = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const mockAppointments = [
          {
            id: 1,
            service: 'Vet Check-up',
            date: '2025/11/06',
            time: '11:00 AM',
            provider: 'Pedigree Vet Clinic',
            petName: 'PeeWee'
          }
        ];
        setAppointments(mockAppointments);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="owner-home">
      <section className="hero1">
        <h1 className="title">PetTapp</h1>
        <p className="subtitle">Pet care wellness, one tap away!</p>
      </section>

      <div className="main-content">
        <div className="left-section">
          <section className="hero-section">
            <Slider
              dots={false}
              arrows={true}
              infinite={true}
              slidesToShow={1}
              slidesToScroll={1}
            >
              <div>
                <img src={Carousel1} alt="Slide 1" />
              </div>
              <div>
                <img src={Carousel2} alt="Slide 2" />
              </div>
            </Slider>
          </section>
        </div>

        <div className="right-section">
          <section className="current-appointments">
            <div className="appointments-header">
              <h3>Current Appointments</h3>
            </div>
            <div className="appointments-content">
              {loading ? (
                <div className="loading">Loading appointments...</div>
              ) : appointments.length > 0 ? (
                <div className="appointments-list">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="appointment-item">
                      <div className="appointment-info">
                        <h4>{appointment.service}</h4>
                        <p className="appointment-pet">Pet: {appointment.petName}</p>
                        <p className="appointment-provider">{appointment.provider}</p>
                        <div className="appointment-datetime">
                          <span className="appointment-date">{formatDate(appointment.date)}</span>
                          <span className="appointment-time">{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-appointments">
                  <p>No upcoming appointments</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <section className="services">
        <div className="service-card">
          <div className="service-headers">
            <img src={Veterinary} alt="Veterinary" />
          </div>
          <p className="service-label">Veterinary</p>
        </div>

        <div className="service-card">
          <div className="service-headers">
            <img src={Grooming} alt="Grooming" />
          </div>
          <p className="service-label">Grooming</p>
        </div>

        <div className="service-card">
          <div className="service-headers">
            <img src={Lodging} alt="Lodging" />
          </div>
          <p className="service-label">Lodging</p>
        </div>

        <div className="service-card">
          <div className="service-headers">
            <img src={Transpo} alt="Delivery" />
          </div>
          <p className="service-label">Delivery</p>
        </div>

        <div className="service-card">
          <div className="service-headers">
            <img src={PetSupplies} alt="Pet Supplies" />
          </div>
          <p className="service-label">Pet Supplies</p>
        </div>
      </section>
    </div>
  );
};

export default POHome;