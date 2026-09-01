"use client";
import { useState } from "react";

export default function OrderPage() {
  const [sent,setSent] = useState(false);
  const [f,setF] = useState({name:"",company:"",phone:"",email:"",zip:"",address:"",type:"",product:"Bottled Water",brand:"Poland Spring",size:"16.9 oz",pallets:"1",frequency:"One-time",date:"",notes:""});
  const update=(e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>)=>setF({...f,[e.target.name]:e.target.value});
  const submit=(e:React.FormEvent)=>{e.preventDefault();
    const subject=encodeURIComponent("iLee Water Order Request - "+f.name);
    const body=encodeURIComponent(`NEW iLee WATER ORDER REQUEST\n\nName: ${f.name}\nCompany: ${f.company}\nPhone: ${f.phone}\nEmail: ${f.email}\nZIP: ${f.zip}\nAddress: ${f.address}\nCustomer type: ${f.type}\nProduct: ${f.product}\nBrand: ${f.brand}\nSize: ${f.size}\nPallets: ${f.pallets}\nFrequency: ${f.frequency}\nRequested date: ${f.date}\nNotes: ${f.notes}`);
    window.location.href=`mailto:ileellcrealty@gmail.com?subject=${subject}&body=${body}`; setSent(true);
  };
  if(sent) return <main style={{fontFamily:"Arial",background:"#f5f9ff",minHeight:"100vh",padding:40}}><div style={{maxWidth:600,margin:"60px auto",background:"#fff",padding:35,borderRadius:20,textAlign:"center"}}><div style={{fontSize:50}}>✓</div><h1>Order request ready!</h1><p>Your email app should have the iLee Water request ready to send. If it did not open, call or text 718-908-2598.</p><a href="tel:17189082598" style={{display:"inline-block",background:"#0b5cff",color:"#fff",padding:14,borderRadius:10,textDecoration:"none",fontWeight:900}}>Call / Text</a></div></main>;
  return <main style={{fontFamily:"Arial",background:"#f5f9ff",minHeight:"100vh",color:"#10233f"}}>
    <header style={{background:"#06234b",color:"#fff",padding:"18px 20px",display:"flex",justifyContent:"space-between"}}><a href="/" style={{color:"#fff",textDecoration:"none",fontSize:24,fontWeight:900}}>iLee Water</a><a href="tel:17189082598" style={{color:"#fff"}}>718-908-2598</a></header>
    <div style={{maxWidth:720,margin:"auto",padding:"35px 18px"}}><h1 style={{fontSize:42}}>Order bulk water.</h1><p style={{color:"#64748b",fontSize:17}}>Complete this request and we&apos;ll review your location and quantity and contact you with pricing.</p>
    <form onSubmit={submit} style={{background:"#fff",border:"1px solid #dbe5ef",borderRadius:18,padding:22}}>
      <h2>Your information</h2>
      <Field label="Name *"><input required name="name" value={f.name} onChange={update}/></Field><Field label="Company"><input name="company" value={f.company} onChange={update}/></Field>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}><Field label="Phone *"><input required type="tel" name="phone" value={f.phone} onChange={update}/></Field><Field label="Email *"><input required type="email" name="email" value={f.email} onChange={update}/></Field></div>
      <h2>What do you need?</h2><Field label="Product"><select name="product" value={f.product} onChange={update}><option>Bottled Water</option><option>Sports Drinks</option><option>Water + Beverages</option><option>Other</option></select></Field>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}><Field label="Brand"><select name="brand" value={f.brand} onChange={update}><option>Poland Spring</option><option>Other brand</option><option>No preference</option></select></Field><Field label="Bottle size"><select name="size" value={f.size} onChange={update}><option>16.9 oz</option><option>20 oz</option><option>1 gallon</option><option>5 gallon</option><option>Other / not sure</option></select></Field></div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}><Field label="Pallets"><select name="pallets" value={f.pallets} onChange={update}><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option><option>Not sure</option></select></Field><Field label="Frequency"><select name="frequency" value={f.frequency} onChange={update}><option>One-time</option><option>Weekly</option><option>Every 2 weeks</option><option>Monthly</option><option>As needed</option></select></Field></div>
      <div style={{background:"#edf6ff",padding:13,borderRadius:11,fontSize:13}}><strong>16.9 oz reference:</strong> 1 pallet = 48 cases = 1,920 bottles.</div>
      <h2>Delivery details</h2><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}><Field label="ZIP *"><input required name="zip" maxLength={5} value={f.zip} onChange={update}/></Field><Field label="Requested date"><input type="date" name="date" value={f.date} onChange={update}/></Field></div>
      <Field label="Delivery address *"><input required name="address" value={f.address} onChange={update}/></Field><Field label="Customer type *"><select required name="type" value={f.type} onChange={update}><option value="">Select one</option><option>Construction / jobsite</option><option>Deli / restaurant</option><option>Warehouse / factory</option><option>Office</option><option>Event</option><option>Residential</option><option>Other business</option></select></Field>
      <Field label="Delivery notes"><textarea name="notes" value={f.notes} onChange={update} placeholder="Dock, forklift, jobsite access, special instructions..."/></Field>
      <button type="submit" style={{width:"100%",border:0,borderRadius:12,padding:16,background:"#0b5cff",color:"#fff",fontSize:17,fontWeight:900}}>Submit Order Request →</button>
      <p style={{fontSize:12,color:"#718096"}}>This requests a quote. Your order is not confirmed until iLee Water confirms pricing and availability.</p>
    </form></div>
  </main>;
}
function Field({label,children}:{label:string,children:React.ReactNode}) {
 return <label style={{display:"block",fontWeight:800,fontSize:14,margin:"14px 0"}}>{label}<span style={{display:"block",marginTop:7}}>{children}</span></label>;
}
