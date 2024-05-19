import { Nav } from './components'
import { CustomerReviews, 
  Footer, 
  Hero, 
  PopularProducts, 
  Services, 
  SpecialOffer, 
  Subscribe, 
  SuperQuality } from './sections'

import './index.css'

function App() {
 

  return (
    <>
     <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="py-10 padding-x">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-plate-blue">
        <CustomerReviews />
      </section>
      <section className="w-full py-16 padding-x sm:py-32">
        <Subscribe />
      </section>
      <section className="pb-8 bg-black padding-x padding-t">
        <Footer />
      </section>
     </main>
    </>
  )
}

export default App
