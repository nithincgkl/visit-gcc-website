import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import style from "./style.module.css";
import { RiCheckboxBlankFill } from "react-icons/ri";
import Link from 'next/link';
import { MdOutlineCancel } from "react-icons/md";


const DatePickerWithHover = ({ onClose }) => {
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState({}); // State to hold selected times

    const [rooms, setRooms] = useState([{ id: 1, adults: 0, children: 0, infant: 0 }]);
    const [nextRoomId, setNextRoomId] = useState(2);

    const handleIncrement = (roomId, type) => {
        setRooms((prevRooms) =>
            prevRooms.map((room) => {
                if (room.id === roomId) {
                    if (room[type] < 3) {
                        return {
                            ...room,
                            [type]: room[type] + 1,
                        };
                    }
                }
                return room;
            })
        );
    };

    const handleDecrement = (roomId, type) => {
        setRooms((prevRooms) =>
            prevRooms.map((room) =>
                room.id === roomId && room[type] > 0
                    ? {
                        ...room,
                        [type]: room[type] - 1,
                    }
                    : room
            )
        );
    };

    const handleAddRoom = () => {
        setRooms((prevRooms) => [
            ...prevRooms,
            { id: nextRoomId, adults: 0, children: 0 },
        ]);
        setNextRoomId(nextRoomId + 1);
    };

    const handleRemoveRoom = (roomId) => {
      if (rooms.length > 1) {  //Prevent deleting the last room
          setRooms(prevRooms => prevRooms.filter(room => room.id !== roomId));
      }
  };

    // Sample data - add more dates as needed
    const timeSlots = {
        '2025-02-24': [
            { time: '09:00 AM', price: '₹6,599' },
            { time: '02:00 PM', price: '₹7,299' },
            { time: '05:00 PM', price: '₹6,999' }
        ],
        '2025-02-27': [
            { time: '10:00 AM', price: '₹6,799' },
            { time: '03:00 PM', price: '₹7,099' }
        ],
        '2025-02-02': [
            { time: '09:00 AM', price: '₹6,599' },
            { time: '02:00 PM', price: '₹7,299' },
            { time: '05:00 PM', price: '₹6,999' }
        ],
        '2025-02-07': [
            { time: '10:00 AM', price: '₹6,799' },
            { time: '03:00 PM', price: '₹7,099' }
        ]
    };

    // Custom CSS for the hover effect
    const customStyles = `
  .date-cell:hover .time-slots {
      display: block;
    }

    .date-cell--selected .time-slots {
      display: block;
      color: black;
    }

    .time-slots {
      display: none;
      position: absolute;
      background: white;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 8px;
      width: 200px;
      color: black;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }

    .time-slot {
      padding: 4px 8px;
      border-bottom: 1px solid #eee;
    }

    .time-slot:last-child {
      border-bottom: none;
    }

  .react-datepicker__day:hover {
    background-color: #f0f9ff;
    border: none;
  }

  .react-datepicker__day--selected {
    color: white !important;
    background-color: blue !important;
    border: none;
  }

  .react-datepicker__day-name {
    width: 90px !important;
    padding: 7px 0;
    font-size: 20px;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--in-range:hover,
  .react-datepicker__year-text--selected:hover,
  .react-datepicker__year-text--in-selecting-range:hover,
  .react-datepicker__year-text--in-range:hover {
    border: none;
    border-radius: 0px;
    background-color: blue !important;
    color: white !important;
  }

  @media (max-width: 1200px) {
    .react-datepicker__day {
      width: 70px !important;
      padding: 7px 0;
      font-size: 15px;
      color: #797979 !important;
    }

       .react-datepicker__day-names {
    margin-bottom: -10px;
  }

   .react-datepicker__day-name {
    width: 70px !important;
    padding: 7px 0;
    font-size: 18px;
  }

  .time-slots {
    left: 10%;
  }
  }

  @media (max-width: 520px) {
    .react-datepicker__day {
      width: 40px !important;
      padding: 4px 0;
      font-size: 15px;
      color: #797979 !important;
    }

    .react-datepicker__day-name {
      width: 40px !important;
      padding: 4px 0;
      font-size: 18px;
    }

    .react-datepicker__day-names {
      margin-bottom: -10px;
    }

    .react-datepicker__current-month {
      padding-bottom: 15px !important;
      margin-top: -10px !important;
    }

    .time-slot {
      padding: 4px 8px;
    }
  }
`;

    const renderDayContents = (day, date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const dayOfMonth = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${dayOfMonth}`;
        const slots = timeSlots[dateString];

        const isSelected = selectedDates.some(d => {
            const selYear = d.getFullYear();
            const selMonth = String(d.getMonth() + 1).padStart(2, '0');
            const selDayOfMonth = String(d.getDate()).padStart(2, '0');
            return `${selYear}-${selMonth}-${selDayOfMonth}` === dateString;
        });


        return (
            <div className="date-cell">
                {day}
                {slots && (
                    <div className="time-slots">
                        <div className="font-bold mb-2">Available Times:</div>
                        {slots.map((slot, index) => {
                            const isTimeSelected = selectedTimes[dateString]?.includes(slot.time);
                            return (
                                <div key={index} className="time-slot">
                                    <div className="flex justify-between">
                                        <span>{slot.time}</span>
                                        <span className="text-green-600">{slot.price}</span>
                                        <input
                                            type="checkbox"
                                            checked={isTimeSelected}
                                            onChange={(e) => handleTimeSelect(dateString, slot.time, e.target.checked)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    };

    // Function to format the selected date
    const formatDate = (date) => {
        if (!(date instanceof Date) || isNaN(date)) {
            return 'Invalid date';
        }
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short', // Add this line
        };
        return date.toLocaleDateString(undefined, options);
    };

    const handleDateChange = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const dayOfMonth = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${dayOfMonth}`;

        const isDateAlreadySelected = selectedDates.some(d => {
            const selYear = d.getFullYear();
            const selMonth = String(d.getMonth() + 1).padStart(2, '0');
            const selDayOfMonth = String(d.getDate()).padStart(2, '0');
            return `${selYear}-${selMonth}-${selDayOfMonth}` === dateString;
        });

        if (isDateAlreadySelected) {
            // Remove the date if it's already selected
            setSelectedDates(selectedDates.filter(d => {
                const selYear = d.getFullYear();
                const selMonth = String(d.getMonth() + 1).padStart(2, '0');
                const selDayOfMonth = String(d.getDate()).padStart(2, '0');
                return `${selYear}-${selMonth}-${selDayOfMonth}` !== dateString;
            }));

            //Also clear the times for that date
            setSelectedTimes(prevTimes => {
                const newTimes = { ...prevTimes };
                delete newTimes[dateString];
                return newTimes;
            });

        } else {
            // Add the date if it's not already selected
            setSelectedDates([...selectedDates, date]);
        }
    };

    const formatDateList = (dates) => {
        return dates.map(date => formatDate(date)).join(', ');
    }

    const handleTimeSelect = (dateString, time, isSelected) => {
        setSelectedTimes(prevTimes => {
            const dateTimes = prevTimes[dateString] || [];

            if (isSelected) {
                // Add the time if it's not already selected
                if (!dateTimes.includes(time)) {
                    return {
                        ...prevTimes,
                        [dateString]: [...dateTimes, time],
                    };
                }
                return prevTimes; // Time already selected
            } else {
                // Remove the time if it's selected
                const updatedTimes = dateTimes.filter(t => t !== time);
                if (updatedTimes.length === 0) {
                    const newTimes = { ...prevTimes };
                    delete newTimes[dateString];
                    return newTimes;
                }
                return {
                    ...prevTimes,
                    [dateString]: updatedTimes,
                };
            }
        });
    };

    const displaySelectedDateAndTime = () => {
      if (selectedDates.length === 0) {
          return 'No date selected';  // Return a default value
      }

      return selectedDates.map(date => {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const dayOfMonth = String(date.getDate()).padStart(2, '0');
          const dateString = `${year}-${month}-${dayOfMonth}`;

          const formattedDate = formatDate(date);
          const timesForDate = selectedTimes[dateString] || [];

          let displayString = formattedDate;  // Start with the date

          if (timesForDate.length > 0) {
              displayString += ` (${timesForDate.join(', ')})`;  // Add times
          }

          return <span key={dateString}>{displayString}<span style={{marginLeft: '15px'}}></span></span>; // Add a 10px gap

      }).reduce((prev, curr) => [prev, ', ', curr]);
  };


    return (
        <div className={`bg-white ${style["date-pick-container"]}`}>

            <div className="flex justify-between items-center" style={{backgroundColor: '#fcfafb'}}>
              <h3 className="font-semibold">Check Price & Availability</h3>
                <button
                    onClick={onClose} className={`${style["date-close-btn"]}`}
                >
                    ×
                </button>
            </div>
            <div className={`bg-white rounded-lg shadow-xl p-lg-6 p-2 ${style["date-pick"]}`}>


                <div className={style["date-left"]}>
                    <p className='py-2 ms-2'>Departure Data Selected: {displaySelectedDateAndTime() || 'No date selected'}</p>

                    <style>{customStyles}</style>
                    <div className="relative">
                        <DatePicker
                            selected={new Date()}
                            onChange={handleDateChange} // changed onChange
                            inline
                            renderDayContents={renderDayContents}
                            calendarStartDay={0}
                            highlightDates={selectedDates} // Highlight selected dates
                        />
                    </div>
                </div>

                <div className={style["date-right"]}>
                    <div className={` ${style["room-section"]} d-flex flex-column  justify-content-between`}>
                        <div className=''>
                            <h4 className="text-xl font-semibold">Rooms & Travellers:</h4>
                            {rooms.map((room, index) => (
                                <div
                                    key={room.id}
                                    className="d-flex flex-row justify-content-between col-12"
                                >
                                    <div className="me-xl-0 me-lg-5 me-5">
                                        <p>Room {room.id}</p>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <div className="me-xl-0 me-lg-5 me-5">
                                            <p style={{ height: '10px' }}>Adult(s)</p>
                                            <div style={{ display: 'flex', gap: '0px' }}>
                                                <button onClick={() => handleDecrement(room.id, 'adults')} className={style["numberdecrement"]} >
                                                    -
                                                </button>
                                                <span
                                                    style={{
                                                        padding: '5px 10px',
                                                        fontSize: '20px',
                                                        border: '1px solid',
                                                    }}
                                                >
                                                    {room.adults}
                                                </span>
                                                <button onClick={() => handleIncrement(room.id, 'adults')} className={style["numberincrement"]}>
                                                    +
                                                </button>
                                            </div>
                                            <p className="date_right_para">(12+ years)</p>
                                        </div>

                                        <div>
                                            <p style={{ height: '10px' }}>Infant</p>
                                            <div style={{ display: 'flex', gap: '0px' }}>
                                                <button onClick={() => handleDecrement(room.id, 'infant')} className={style["numberdecrement"]} >
                                                    -
                                                </button>
                                                <span
                                                    style={{
                                                        padding: '5px 10px',
                                                        fontSize: '20px',
                                                        border: '1px solid',
                                                    }}
                                                >
                                                    {room.children}
                                                </span>
                                                <button onClick={() => handleIncrement(room.id, 'infant')} className={style["numberincrement"]}>
                                                    +
                                                </button>
                                            </div>
                                            <p className="date_right_para">(Below 2 years)</p>
                                        </div>

                                    </div>
                                    <div>
                                        <p style={{ height: '10px' }}>Children</p>
                                        <div style={{ display: 'flex', gap: '0px' }}>
                                            <button onClick={() => handleDecrement(room.id, 'children')} className={style["numberdecrement"]} >
                                                -
                                            </button>
                                            <span
                                                style={{
                                                    padding: '5px 10px',
                                                    fontSize: '20px',
                                                    border: '1px solid',
                                                }}
                                            >
                                                {room.children}
                                            </span>
                                            <button onClick={() => handleIncrement(room.id, 'children')} className={style["numberincrement"]}>
                                                +
                                            </button>
                                        </div>
                                        <p className="date_right_para">(Below 12 years)</p>
                                    </div>
                                    {index > 0 && (
                                        <MdOutlineCancel className=' ms-3' size={20} color="red"
                                            style={{ cursor: 'pointer',  }}
                                            onClick={() => handleRemoveRoom(room.id)}
                                        />
                                     
                                    )}
                                    <br />
                                </div>
                            ))}
                            <button
                                className="bg-white col-12"
                                style={{ border: 'none', color: '#3C99DC' }}
                                onClick={handleAddRoom}
                            >
                                + Add another room
                            </button>

                        </div>

                        <div className='my-md-4 my-1 pe-2'>
                            <label className='text-black'>Customer Country*</label><br />
                            <select className='col-xl-11 col-lg-12 col-12 fw-semibold my-1' style={{ height: '35px' }}>
                                <option>New Delhi</option>
                                <option>Delhi</option>
                                <option>Chennai</option>
                                <option>Coimbatore</option>
                            </select>
                        </div>

                    </div>
                    <div className="mt-4 flex ">
                        <Link href="/checkout">
                            <button
                                onClick={() => {
                                    // Handle booking logic here
                                    onClose();
                                }}
                                className="py-3 bg-blue-600 text-white rounded col-12 " style={{ background: '#5bb3b5', border: 'none', fontSize: '20px' }}
                            >
                                Proceed
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatePickerWithHover;
