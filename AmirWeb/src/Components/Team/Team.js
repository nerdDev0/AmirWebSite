import "./Team.css";
import TeamCard from "./TeamCard/TeamCard";
export default function Team() {
  let valueTeamCard=[
    {id:1,src:"./Team-Pic/1.jpg",name:"امیر حسین",jobName:"فرانت اند "},
    {id:2,src:"./Team-Pic/2.jpg",name:"امین راد",jobName:"بک اند"},
    {id:3,src:"./Team-Pic/3.jpg",name:"عرفان قاصمی",jobName:"طراح"},
    {id:4,src:"./Team-Pic/4.jpg",name:"هادی یکانی",jobName:"برنامه نویس"}
  ]
  return (
    <section className="Team-align">
      <div className="Team-container">
        <section className="Team-header">
           
          <p>تیم</p>
          <h2>تیم ما را بررسی کنید</h2>
        </section>
        <section className="Team-card-container">
           {valueTeamCard.map((itemTeamCard)=>(
            <TeamCard key={itemTeamCard.id}  {...itemTeamCard}/>
           ))}
        </section>
      </div>
    </section>
  );
}
