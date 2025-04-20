import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn={firstName:"Dhrithi", lastName: "H H", email:"dhrithihh@gmail.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
          />

        <TotalBalanceBox 
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.60}
        />
        </header>


        RECENT TRANSACTIONS
        </div>  

        <RightSideBar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.65},{currentBalance:193.65}]}
        />
    </section>

  )
}

export default Home



