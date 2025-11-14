import imgFrame10 from '../assets/a71123c7c484251882b5fe99a815da355640842e.svg'
import imgFrame11 from '../assets/f30718753c5b3bfddd75e276805760524b0ed2a8.svg'
import imgFrame12 from '../assets/988cd6db8563410e2d5aa9d83ca0c7b7eb752068.svg'
import imgFrame13 from '../assets/d7546941a6d2cbb0220880393658ff6b9553999e.svg'
import img8 from '../assets/cac8f56d0bed1e257f98898d222547a89444e803.svg'
import imgContainer from '../assets/56165109d8029cce9d5b57cbdade27e1aa7e40a7.svg'
import imgLogo from '../assets/ba02b81a98ab4d0dbaa2262a3ba5d1d175976915.svg'
import imgUnion from '../assets/44ca22b3edfadb6359800dd481ac6404e634150a.svg'
import imgExclude from '../assets/300bdd5f75b5081b783f40fc30848503e016596f.svg'
import imgEllipse16 from '../assets/249b59a2f68017e8f145c499717c0545d6f2f2b6.png'
import imgFrame101 from '../assets/42b70f5acccb90b74cb18db233ab85680b6433d0.svg'

export function OneuxSearchBox() {
  return (
    <div className="sticky top-0 z-50 border-b border-white bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[38px] items-center gap-4">
          {/* Browser Icons */}
          <div className="flex items-start gap-4">
            <div className="flex items-start gap-4">
              <div className="relative h-4 w-4 shrink-0">
                <img alt="" className="h-full w-full" src={imgFrame11} />
              </div>
              <div className="relative h-4 w-4 shrink-0">
                <img alt="" className="h-full w-full" src={imgFrame10} />
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="relative h-4 w-4 shrink-0">
                <img alt="" className="h-full w-full" src={imgFrame12} />
              </div>
              <div className="relative h-4 w-4 shrink-0">
                <img alt="" className="h-full w-full" src={imgFrame13} />
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 rounded-[20px] bg-[#f1f3f4] px-3 py-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="relative h-4 w-4 shrink-0">
                  <img alt="" className="h-full w-full" src={img8} />
                </div>
                <p className="font-medium leading-4 text-[#36373a] text-xs">https://www.amild.id/br</p>
              </div>
              <div className="relative h-4 w-4 shrink-0">
                <div className="absolute inset-[12.5%_12.5%_15.79%_12.5%]">
                  <img alt="" className="h-full w-full" src={imgContainer} />
                </div>
              </div>
            </div>
          </div>

          {/* Browser Controls */}
          <div className="hidden h-[22px] w-[133px] items-center gap-2 md:flex">
            <div className="relative h-3.5 w-3.5 shrink-0 overflow-hidden">
              <img alt="" className="h-full w-full" src={imgLogo} />
            </div>
            <div className="relative h-[15px] w-[15px] shrink-0">
              <img alt="" className="h-full w-full" src={imgUnion} />
            </div>
            <div className="relative h-[15px] w-[15px] shrink-0">
              <img alt="" className="h-full w-full" src={imgExclude} />
            </div>
            <div className="relative h-[22px] w-[22px] shrink-0">
              <img alt="" className="h-full w-full" height="22" src={imgEllipse16} width="22" />
            </div>
            <div className="relative h-[13px] w-[3px] shrink-0">
              <img alt="" className="h-full w-full" src={imgFrame101} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

