import imgGroup6 from '../assets/29d8ca5533588a02240f04d7489a868c7943d839.svg'
import imgGroup7 from '../assets/5a85462078fb518397e70c190a8050013e326644.svg'
import imgMdiLocationRadius from '../assets/b5a8828f941a9dd7d182a04312b22fbfe9acfab4.svg'

export function DetailEventDetailsCard() {
  const handleReservation = () => {
    // Handle reservation logic
    console.log('Reservasi Sekarang clicked')
  }

  return (
    <div className="min-h-[412px] w-full rounded-[15px] border border-neutral-100 bg-white lg:h-[412px]">
      <div className="relative h-full min-h-[412px] w-full overflow-hidden rounded-[15px] p-5 lg:h-[412px] lg:p-0">
        {/* EVENT DETAILS Header */}
        <div className="mb-4 flex items-center gap-5 lg:absolute lg:left-0 lg:top-[20px] lg:mb-0">
          <div className="h-[30px] w-[5px] shrink-0 rounded-br-[15px] rounded-tr-[15px] bg-[#ed1c24]" />
          <p className="text-lg font-black uppercase leading-normal text-[#2c2a29] lg:text-xl">EVENT DETAILS</p>
        </div>
        
        {/* Events Tag */}
        <div className="mb-4 flex w-fit items-center justify-center rounded-[10px] bg-[#fde8e9] px-[15px] py-[10px] lg:absolute lg:left-[20px] lg:top-[60px] lg:mb-0">
          <p className="text-right text-sm font-medium leading-normal tracking-[0.14px] text-[#ed1c24]">Events</p>
        </div>
        
        {/* Event Title */}
        <p className="mb-4 text-lg font-bold capitalize leading-normal text-[#2c2a29] lg:absolute lg:left-[20px] lg:top-[100px] lg:mb-0 lg:w-[349px] lg:text-xl">
          "Soundstream, Cara Nonton Konser Baru dengan Konsep Seru!"
        </p>
        
        {/* Event Information */}
        <div className="mb-4 flex w-full flex-col gap-[15px] rounded-[15px] bg-neutral-100 p-5 lg:absolute lg:left-1/2 lg:top-[164px] lg:w-[361px] lg:-translate-x-1/2 lg:mb-0">
          {/* Date */}
          <div className="flex items-center gap-[11px]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#ed1c24]">
              <div className="relative h-5 w-5 overflow-hidden">
                <img alt="Calendar Icon" className="h-full w-full" src={imgGroup6} />
              </div>
            </div>
            <p className="text-sm font-medium leading-normal text-[#413f3e] lg:text-base">Jum, 30 Sept 2023</p>
          </div>
          
          {/* Time */}
          <div className="flex items-center gap-[11px]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#ed1c24]">
              <div className="relative h-5 w-5 overflow-hidden">
                <img alt="Time Icon" className="h-full w-full" src={imgGroup7} />
              </div>
            </div>
            <p className="text-sm font-medium leading-normal text-[#413f3e] lg:text-base">18:00 - 22:00 WIB</p>
          </div>
          
          {/* Location */}
          <div className="flex items-start gap-[11px]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#ed1c24]">
              <div className="relative h-5 w-5">
                <img alt="Location Icon" className="h-full w-full" src={imgMdiLocationRadius} />
              </div>
            </div>
            <div className="text-sm font-medium leading-normal text-[#413f3e] lg:text-base">
              <p className="mb-0">JIEXPO Kemayoran, Pademangan,</p>
              <p>North Jakarta</p>
            </div>
          </div>
        </div>
        
        {/* Reservation Button */}
        <button
          type="button"
          onClick={handleReservation}
          className="mt-4 flex h-[52px] w-full items-center justify-center gap-[5px] overflow-hidden rounded-[10px] bg-[#ed1c24] px-5 py-[15px] transition-colors hover:bg-[#d01820] lg:absolute lg:bottom-0 lg:left-[20px] lg:top-[340px] lg:mt-0 lg:w-[361px]"
        >
          <p className="text-sm font-black capitalize leading-normal text-white lg:text-base">Reservasi Sekarang</p>
        </button>
      </div>
    </div>
  )
}

