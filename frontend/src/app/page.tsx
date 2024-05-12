import { Button,buttonVariants } from "@/components/ui/button";
import { Truck,Croissant,CheckCircle} from "lucide-react";
import Link from "next/link";
const perks = [
  {
    name: "Instant delivery",
    Icon: Truck,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at"
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at"
  }
  ,
  {
    name: "The Best",
    Icon: Croissant,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at"
  }
]

export default function Home() {
  return (
      <>
      <div className="mx-auto w-full max-w-screen-xl px-20 bg-primary-light">
      <div className=" py-20 mx-auto text-center flex
       flex-col items-center max-w-3xl
      ">
        <h1 className="font-bold tracking-tighter text-gray-900 text-6xl">
        <span className=" text-green-600">
        PAUL BAKERY {' '}
        </span>
        Where Flavor Meets Fantasy!
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam temporibus repellendus cupiditate reprehenderit itaque numquam libero incidunt, nam nemo odio commodi perspiciatis enim aspernatur, sed nostrum cum? Fuga, id!
        </p>
        <div className="flex  mt-6 gap-4">
          <Link href="/products" className={buttonVariants()}>
          Top Products
          </Link>
          <Link href="/products">
          <Button variant="ghost">
            Best combinations &rarr;
          </Button>
          </Link>
        </div>
      </div>
      </div>
      <section className="border-t border-gray-200  bg-primary-lightDark">
      <div className="mx-auto w-full max-w-screen-xl px-20 py-20">
        <div className=" grid grid-cols-3 gap-x-8 gap-y-0">
          {
            perks.map((perk) => (
              <div key={perk.name} className="
              text-center md:items-start  lg:block lg:text-center
              ">
                <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full
                 bg-green-100 text-green-900
                ">
                  {<perk.Icon className="w-1/3 h-1/3" />}
                </div>
                </div> 
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
        <h3 className="text-base font-medium text-gray-900"> {perk.name}</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          {perk.description}
        </p>
              </div>
              </div>
            ))
          }
        </div>

      </div>
      </section>
      </>
  )
}
