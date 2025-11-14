import imgBanner from '../assets/4a38033892e189ca2597a994363748077d523037.png'

export function DetailEventBanner() {
  return (
    <div className="relative h-[250px] w-full overflow-hidden rounded-[15px] bg-[#d9d9d9] sm:h-[350px] md:h-[412px]">
      <div className="absolute -top-[21px] left-0 h-[calc(100%+42px)] w-full rounded-[15px]">
        <img
          alt="Event Banner"
          className="absolute inset-0 h-full w-full object-cover"
          src={imgBanner}
        />
      </div>
    </div>
  )
}

