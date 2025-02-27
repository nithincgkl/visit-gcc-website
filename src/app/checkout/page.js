"use client"; 

import React, { useState, useEffect } from 'react';
import { Range } from 'react-range';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import style from './style.module.css';
import Banner from '../../../components/banner/banner';
import Link from 'next/link';
import Carousal from '../../../components/carousel/Carousal'; 
import Accordion from '../../../components/accordion/accordion';
import EventsExploreTab from '../../../components/tour-package/events-explore';
import { RiInformationLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser , FaRegHeart} from "react-icons/fa6";
import { FaPlus ,FaBaby } from "react-icons/fa";
import { BiSolidPlusCircle } from "react-icons/bi";
import { PiMinusCircleFill } from "react-icons/pi";
import { GiPerson } from "react-icons/gi";
import { MdOutlineBoy } from "react-icons/md";
import { GoShare } from "react-icons/go";


const Checkout = () => {
        const [isOpen, setIsOpen] = useState(false); 
        const initialTime = 720; 
        const [timeLeft, setTimeLeft] = useState(initialTime); 
        const [gender, setGender] = useState('');

        const [travellers, setTravellers] = useState([
          {
            id: 1,
            lastName: '',
            firstName: '',
            idType: '',
            idNumber: '',
            gender: '',
          },
        ]);
        const [nextTravellerId, setNextTravellerId] = useState(2);
      
        const handleInputChange = (travellerId, field, value) => {
          setTravellers((prevTravellers) =>
            prevTravellers.map((traveller) =>
              traveller.id === travellerId ? { ...traveller, [field]: value } : traveller
            )
          );
        };
      
        const handleGenderChange = (travellerId, gender) => {
          setTravellers((prevTravellers) =>
            prevTravellers.map((traveller) =>
              traveller.id === travellerId ? { ...traveller, gender } : traveller
            )
          );
        };
      
        const handleAddTraveller = () => {
          setTravellers((prevTravellers) => [
            ...prevTravellers,
            {
              id: nextTravellerId,
              lastName: '',
              firstName: '',
              idType: '',
              idNumber: '',
              gender: '',
            },
          ]);
          setNextTravellerId(nextTravellerId + 1);
        };
      
      
        useEffect(() => {
          const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
              if (prevTime <= 0) {
                clearInterval(interval); 
                return 0;
              }
              return prevTime - 1; 
            });
          }, 1000); // 1000 ms = 1 second
      
          return () => clearInterval(interval);
        }, []);
      
        // Format time to "mins:sec"
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
      
      
        const toggleAccordion = () => {
          setIsOpen(!isOpen); 
        };
   
        const [guests, setGuests] = useState({
          adults: 1,
          children: 0,
          infants: 0,
        });
      
        const updateGuestCount = (type, change) => {
          setGuests((prevGuests) => {
            const newValue = prevGuests[type] + change;
      
            if (newValue >= 0 && newValue <= 3) {
              return { ...prevGuests, [type]: newValue };
            }
            return prevGuests;
          });
        };
       
  const pakageDetailsOtherPackages = [
    {
      id: 1,
      heading: "Project Heading",
      description: "Industry Name",
      image: "/images/other-packages/01.jpg",
    },
    {
      id: 2,
      heading: "Project Heading",
      description: "Industry Name",
      image: "/images/other-packages/02.jpg",
    },
    {
      id: 3,
      heading: "Project Heading",
      description: "Industry Name",
      image: "/images/other-packages/03.jpg",
    },
    {
      id: 4,
      heading: "Project Heading",
      description: "Industry Name",
      image: "/images/other-packages/04.jpg",
    },
    {
      id: 5,
      heading: "Project Heading",
      description: "Industry Name",
      image: "/images/other-packages/05.jpg",
    },
    {
      id: 6,
      heading: "Project Heading",
      description: "Industry Name",
      image: "/images/other-packages/06.jpg",
    },
  ];


  return (
    <div>
      <Banner />
        <div>
            <div className="">
            <div className={`container ${style["checkout-package-details"]}`}>
          <div className="row pt-5">
          <div className="col-md-8">
                <h2 className='d-flex justify-content-between'>
                Tour Package Booking Checkout
                  <button className='rounded-2 fw-semibold fs-6 py-2 px-2 bg-white' style={{ border: '4px solid #5ab2b3', color: '#5ab2b3' }}>
                    Customizable
                  </button>
                </h2>
                <p style={{ fontSize: '14px' }}>Guest Signup - Tour Package Booking </p>
                <p className='fs-6'>
                  <Link href="#">
                    <span style={{ color: '#3C99DC' }} className='fs-6'> Register or Sign in</span>
                  </Link> to Visitgcc.com to manage your bookings with ease!
                </p>

                <div>
                  <h1 className='m-3 ms-0'>Personal Information</h1>
                  <form className='col-xxl-10 col-xl-12'>
                  {travellers.map((traveller) => (
                      <div key={traveller.id} className='pt-3'>
                        <p
                          className="align-items-center"
                          style={{ color: '#5ab2b3', height: '12px' }}
                        >
                          <FaUser
                            size={23}
                            className="me-3"
                            color="#5ab2b3"
                            style={{ marginTop: '-11px' }}
                          />
                          Traveller <span className="fs-4 fw-bold">{traveller.id}</span>
                        </p>
                        <div className="">
                          <div className="col-12 pt-2">
                            <input
                              className={`${style['promo_input']} col-xl-5 col-lg-6 col-12 `}
                              placeholder="LastName (in English)*"
                              value={traveller.lastName}
                              onChange={(e) =>
                                handleInputChange(traveller.id, 'lastName', e.target.value)
                              }
                            />
                            <br className="d-xl-none d-lg-block" />
                            <input
                              className={`${style['promo_input']} ms-xxl-5 ms-xl-5 ms-md-0 col-xl-5 col-lg-6 col-12`}
                              placeholder="First & middle name(in English)*"
                              value={traveller.firstName}
                              onChange={(e) =>
                                handleInputChange(traveller.id, 'firstName', e.target.value)
                              }
                            />
                            <br />
                          </div>
                          <div className="col-12 pt-2">
                            <input
                              className={`${style['promo_input']} col-xl-5 col-lg-6 col-12`}
                              placeholder="ID type"
                              value={traveller.idType}
                              onChange={(e) =>
                                handleInputChange(traveller.id, 'idType', e.target.value)
                              }
                            />
                            <br className="d-xl-none d-lg-block" />
                            <input
                              className={`${style['promo_input']} ms-xxl-5 ms-xl-5 ms-md-0 col-xl-4 col-lg-6 col-12 `}
                              placeholder="Id number*"
                              value={traveller.idNumber}
                              onChange={(e) =>
                                handleInputChange(traveller.id, 'idNumber', e.target.value)
                              }
                            />
                          </div>
                         {/* gender buttons  */}
                          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <button
                              type="button"
                              className={`${traveller.gender === 'male' ? 'active' : ''}`}
                              onClick={() => handleGenderChange(traveller.id, 'male')}
                              style={{
                                backgroundColor:
                                  traveller.gender === 'male' ? '#5ab2b3' : 'white',
                                color: traveller.gender === 'male' ? 'white' : '#686767',
                                padding: '5px 45px',
                                border: '#e2e2e2 2px solid',
                                borderRadius: '5px',
                              }}
                            >
                              Male
                            </button>
                            <button
                              type="button"
                              className={`promo_input ${
                                traveller.gender === 'female' ? 'active' : ''
                              } ms-md-3 ms-2 `}
                              onClick={() => handleGenderChange(traveller.id, 'female')}
                              style={{
                                backgroundColor:
                                  traveller.gender === 'female' ? '#5ab2b3' : 'white',
                                color: traveller.gender === 'female' ? 'white' : '#686767',
                                padding: '5px 42px',
                                border: '#e2e2e2 2px solid',
                                borderRadius: '5px',
                              }}
                            >
                              Female
                            </button>
                          </div>
                        </div>
                      </div>
                     ))}
                        <div className="d-flex flex-md-row flex-column justify-content-between">
                          <p
                            className="align-items-center d-flex cursor-pointer "
                            style={{ color: '#5ab2b3' }}
                            onClick={handleAddTraveller}
                          >
                            <FaUser size={23} className="me-3" color="#5ab2b3" />
                            <span className="d-flex flex-column">
                              <span style={{ fontSize: '11px' }}>Traveller {nextTravellerId}</span>
                              <span>Add Traveller </span>
                            </span>
                            <FaPlus size={23} className="ms-lg-2 ms-md-2 ms-0" color="#5ab2b3" style={{ marginTop: '6px' }}
                            />
                          </p>
                          <label className="my-3 text-black-50">*Adult-Should be Above 18 Years</label>
                        </div>


                        <div className="d-flex flex-lg-row flex-md-column flex-column gap-xl-5 gap-lg-2 gap-3 justify-content-between col-12 align-items-center py-3" style={{ fontFamily: 'sans-serif' }}>
                          {['adults', 'children', 'infants'].map((type) => (
                            <div key={type} className="d-flex align-items-center me-3 px-1" style={{background: '#f6f6f6'}}> 
                            <div className="d-flex align-items-center">
                                  <span className="me-1">
                                    {type === 'adults' ? <GiPerson size={23} color="#5ab2b3"/> : type === 'children' ? <MdOutlineBoy color="#5ab2b3" size={21}/> : <FaBaby color="#5ab2b3" size={18} />}
                                  </span>
                                </div>
                              <div className="d-flex flex-column" >
                              <span className="fw-bold  me-xl-5 me-lg-4 me-5" style={{fontSize: '13.5px', height: '15px'}}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                                <span className="small text-muted" style={{fontSize: '11px'}}>
                                  {type === 'adults' ? '16+ years' : type === 'children' ? '2-15 years' : 'Under 2'}
                                </span>
                              </div>
                              < PiMinusCircleFill color="#5ab2b3"
                                onClick={() => updateGuestCount(type, -1)}
                                disabled={guests[type] === 0}
                                  size={22}/ >
                       
                              <span className={`fw-bold ${style["count"]} px-2`} style={{ minWidth: '20px', textAlign: 'center' }}>
                                {guests[type]}
                              </span>
                              <BiSolidPlusCircle color="#5ab2b3"
                                onClick={() => updateGuestCount(type, 1)}
                                size={22}   /  >
                         
                            </div>
                          ))}
                        </div>

                    <div>
                      <h1 className='m-3 ms-0'>Travel Details</h1>
                      <label >pickup point</label><br />
                      <select className={`${style["promo_select"]} col-12`}>
                        <option>Please select pick-up point*</option>
                      </select>

                      <label className='pe-0 me-0 pt-3'>Special Requests</label><br />
                        <textarea className={`${style["promo_input"]} my-2 col-12`} placeholder='Please enter Special Requests' />

                        <label className=''>Package Addons</label><br />
                      <select className={`${style["promo_select"]} col-12`}>
                        <option>Add travel medical insurance details if required</option>
                      </select>

                      <h1 className='m-3 ms-0 py-3'>Contact Info</h1>
                      <div className='d-flex flex-xl-row flex-md-column flex-column justify-content-between col-12 gap-xl-5 gap-lg-3'>
                        <div className='col-xl-6 col-12' >
                          <label className=''>Contact Name</label><br />
                          <input className={`${style["promo_input"]} my-2 col-12`} placeholder='Please enter contact name *' />
                        </div>
                        <div className='col-xl-6 col-lg-8 col-md-12 col-12'>
                          <label className=''>Contact Number</label><br />
                          <select className={`${style["promo_select"]} my-2` } style={{width: '68px'}}>
                            <option>+918</option>
                          </select>
                          <input className={`${style["promo_input"]} my-2 ms-xl-3 ms-lg-1 ms-2`} style={{width: '240px'}} placeholder='Mobile Number*' />
                        </div>
                      </div>
                      <div className='my-3'>
                        <label className='pe-0 me-0'>Email Adress</label><br />
                        <input className={`${style["promo_input"]} my-2 col-12`} placeholder='All important updates will be send to this email ID*' />
                      </div>

                      </div>
                  </form>
                </div>
            </div>

            <div className="col-md-4 my-md-0 my-5">
                    <div className={style["flex-checkout-details-right"]}>
                      <div className='d-flex flex-lg-row flex-md-column flex-row ms-lg-0 ms-3'>
                        <span>
                          <button className={style["btn-one"]}>Pay Now</button>
                        </span>
                        <span>
                          <button className={style["btn-two"]}>Contact Seller</button>
                          <p className="col-xl-9 col-12" style={{ fontSize: '9px' }}>
                            You can now directly communicate with the Seller of this package
                          </p>
                        </span>
                      </div>
                    </div>

                    <label className='text-black fw-semibold fs-4'>Package Price</label><br />
                    <div className='col-11 text-black-50 my-2' style={{ height: '2px', borderTop: '3px dashed #e2e2e2' }} />

                    <div className='col-11' style={{borderBottom: '2px solid #e2e2e2'}}>
                 
                    <h5 className='pt-2 d-flex pb-2 justify-content-between col-11'><span><b>Price</b></span><span>AED 121.00</span></h5> 
                            <p>2 Adult </p>
                            <p>1 Children</p>
                            <h5 className='pt-2 d-flex pb-1 justify-content-between col-11'><span><b>Total</b></span><span><b>AED 121.00</b></span></h5> 
                    </div>              


                    <p className="col-lg-12 col-xl-11 col-12 pt-5">
                      By proceeding, I acknowledge that I have read and agree to visitgcc.com's Terms & Conditions and Privacy Statement.
                    </p>
                    <button
                      className='bg-white col-11 d-flex justify-content-between'
                      style={{ border: 'none', color: '#3C99DC' }}
                      onClick={toggleAccordion}
                    >
                      <span>Cancellation & <br className='d-lg-none d-md-block d-none' /> Date Change </span>
                      <IoIosArrowDown
                        color='grey'
                        size={22}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', // Rotate the arrow when the accordion is open
                          transition: 'transform 0.3s ease', // Smooth transition for the arrow rotation
                        }}
                      />
                    </button>

                    <div className='my-4'>
                      <label className='text-black fw-semibold fs-4'>Promotion</label><br />
                      <label className=''>Promo code</label><br />
                      <div>
                        <input
                          className={`${style["promo_input"]} col-xl-8 col-lg-7 col-md-10`}
                          style={{ height: '35px' }}
                        />
                        <button
                          className={`${style["btn-one"]} my-lg-0 my-md-1 my-2`}
                          style={{ padding: '6px 10px' }}
                        >
                          Apply Now
                        </button>
                      </div>
                      <div className='pt-4 d-flex flex-xl-row flex-lg-column flex-column'>
                        <div>
                          <label className='text-black fw-semibold fs-4'>Complete Booking In</label><br />
                          <p> &nbsp; The package price will refresh<br className='d-lg-block d-none' /> &nbsp; After</p>
                        </div>
                        <div className='rounded-pill align-content-center' style={{ height: '85px', width: '85px', border: '4px solid #5ab2b3' }}>
                          <h1 className='align-items-center align-self-center d-flex flex-column ms-2 my-1 text-black-50'>
                            <span style={{ fontSize: '23px' }}>
                              {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                            </span>
                            <span style={{ fontSize: '12px' }}>mins</span>
                          </h1>
                        </div>
                      </div>


                      <div className='pt-4 d-flex flex-xl-row flex-md-column flex-column '>
                        <div className='col-lg-8 col-12 '>
                          <label className='text-black fw-semibold fs-4'>Loyalty Rewards</label><br />
                          <p>Enroll in our loyalty program <br className='d-lg-block d-none' /> to earn travel rewards on future bookings</p>
                        </div>
                        <div className='align-content-center' >
                        <button
                          className={`${style["btn-one"]} my-lg-0 my-md-1 my-2`}
                          style={{ padding: '6px 10px' }}
                        >
                          Learn More
                        </button>                 
                               </div>
                      </div>

                      <div className='pt-4'>
                        <div>
                          <label className='text-black fw-semibold fs-4'>Social Sharing Incentive</label><br />
                          <label className=' fw-normal pt-1'> Share your registration on social media for<br className='d-lg-block d-none' />
                          a chance to win VIP upgrades </label>
                          <div className='d-flex gap-3 pt-2'>
                            <button className={`${style["ordinary_button"]}`}><GoShare size={21}/> Share</button>
                            <button className={`${style["ordinary_button"]}`}><FaRegHeart size={20}/> Save</button>
                          </div>
                        </div>         
                      </div>
                    </div>
               </div>
          </div>

            </div>
            </div>
              <div className="container">
                <img src="/images/blank.png" className='w-100' style={{height: '400px',borderRadius: '15px'}} alt="Banner" />
              </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 pt-5 d-flex justify-content-center" >
                  <h3>Other Packages</h3>
                </div>
              </div>
           </div>

          <div className="container-fluid">
            <div className="row pt-2 pb-5">
              <div className="col-md-12">
                <Carousal
                  pakageDetailsOtherPackages={pakageDetailsOtherPackages}
                  count={5}
                  type="pakage-details-other-packages"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Checkout;
