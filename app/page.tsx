import Link from "next/link";

const services = [
  ["🏗️", "Construction & Jobsites", "Keep crews supplied with dependable pallet delivery."],
  ["🏪", "Delis & Restaurants", "Convenient recurring water and beverage delivery."],
  ["🏭", "Warehouses & Factories", "Bulk hydration for employees and facilities."],
  ["🏠", "Home Delivery", "Split a pallet with friends, family, or neighbors."],
];

export default function Home() {
  return (
    <main style={{fontFamily:"Arial,Helvetica,sans-serif",color:"#10233f",background:"#f7fbff",minHeight:"100vh"}}>
      <header style={{background:"#06234b",color:"#fff"}}>
        <div style={{maxWidth:1120,margin:"auto",padding:"16px 22px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Link href="/" style={{color:"#fff",textDecoration:"none",fontWeight:900,fontSize:25}}>iLee Water</Link>
          <nav style={{display:"flex",gap:18}}>
            <Link href="/order" style={{color:"#fff",textDecoration:"none",fontWeight:700}}>Order Water</Link>
            <a href="tel:17189082598" style={{color:"#fff",textDecoration:"none",fontWeight:700}}>718-908-2598</a>
          </nav>
        </div>
      </header>
      <section style={{background:"linear-gradient(135deg,#06234b,#0b5cff)",color:"#fff"}}>
        <div style={{maxWidth:1120,margin:"auto",padding:"75px 22px 82px"}}>
          <div style={{fontWeight:900,fontSize:13,letterSpacing:1,marginBottom:18}}>NJ • NY • PA DELIVERY</div>
          <h1 style={{fontSize:"clamp(42px,7vw,72px)",lineHeight:1,letterSpacing:-2,margin:"0 0 20px"}}>Bulk water.<br/>Delivered when<br/>you need it.</h1>
          <p style={{fontSize:20,lineHeight:1.55,maxWidth:650}}>Bottled water and beverages delivered to businesses, jobsites, warehouses, events and homes.</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:12,marginTop:30}}>
            <Link href="/order" style={{background:"#fff",color:"#0755d8",padding:"15px 23px",borderRadius:12,textDecoration:"none",fontWeight:900,fontSize:17}}>Order Water →</Link>
            <a href="tel:17189082598" style={{border:"2px solid #fff",color:"#fff",padding:"13px 21px",borderRadius:12,textDecoration:"none",fontWeight:900,fontSize:17}}>Call / Text Us</a>
          </div>
        </div>
      </section>
      <section style={{maxWidth:1120,margin:"auto",padding:"55px 22px"}}>
        <div style={{textAlign:"center",maxWidth:700,margin:"auto"}}>
          <h2 style={{fontSize:36,margin:"0 0 10px"}}>Water delivery built around your route.</h2>
          <p style={{fontSize:17,color:"#5e6d80",lineHeight:1.6}}>One-time orders or recurring deliveries. Tell us what you need and where you need it, and we&apos;ll build the right delivery plan.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:16,marginTop:30}}>
          {services.map(([icon,title,text]) => <div key={title} style={{background:"#fff",border:"1px solid #dce7f2",borderRadius:18,padding:23}}>
            <div style={{fontSize:34}}>{icon}</div><h3 style={{fontSize:19,margin:"13px 0 8px"}}>{title}</h3><p style={{color:"#64748b",lineHeight:1.5,margin:0}}>{text}</p>
          </div>)}
        </div>
      </section>
      <section style={{maxWidth:1120,margin:"auto",padding:"0 22px 50px"}}>
        <div style={{background:"#eaf3ff",borderRadius:22,padding:32}}>
          <div style={{fontSize:13,fontWeight:900,color:"#0b5cff",letterSpacing:1}}>COMMERCIAL ACCOUNTS</div>
          <h2 style={{fontSize:34,margin:"9px 0"}}>Need water every week or every two weeks?</h2>
          <p style={{color:"#52657d",fontSize:17,lineHeight:1.55}}>Recurring routes make ordering easier and help you avoid running out. Construction, deli, warehouse and other business accounts are welcome.</p>
          <Link href="/order" style={{display:"inline-block",background:"#0b5cff",color:"#fff",padding:"14px 20px",borderRadius:11,textDecoration:"none",fontWeight:900}}>Start an Order</Link>
        </div>
      </section>
      <footer style={{background:"#06234b",color:"#fff",padding:"35px 22px",textAlign:"center"}}>
        <strong>iLee Water</strong><br/>NJ • NY • PA • Bulk bottled water & beverage delivery<br/>
        <a href="mailto:ileellcrealty@gmail.com" style={{color:"#fff"}}>ileellcrealty@gmail.com</a> • 718-908-2598
      </footer>
    </main>
  );
}
