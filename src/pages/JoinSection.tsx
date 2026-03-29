

function JoinSection() {
     return (

          <section className="py-24 max-w-8xl mx-auto px-3">
               <div className="flex flex-col items-center text-center">
                    <h2 className="font-serif text-4xl mb-4">Join the LUXE Circle</h2>
                    <p className="text-slate-500 mb-8 max-w-lg">Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form className="w-full max-w-md flex flex-col sm:flex-row gap-4">
                         <input className="flex-1 bg-transparent border-b border-slate-300 focus:border-accent focus:ring-0 px-0 py-3 text-sm transition-colors outline-none" placeholder="ENTER YOUR EMAIL" type="email" />
                         <button className="bg-black text-white px-8 py-3 text-xs font-bold tracking-widest hover:bg-accent transition-colors">SUBSCRIBE</button>
                    </form>
               </div>
          </section>


     )
}

export default JoinSection
