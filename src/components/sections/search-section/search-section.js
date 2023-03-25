
import './search-section.scss'


function SearchSection() {
  return(
    <>
      <section className="search">
        <div className="container">
          <div className="looking">
            <span className="looking__text">Lookiing for</span>
            <input type="text" className="looking__input" placeholder="start typing here..."/>
          </div>
          <div className="filters">
            <span className="filters__text">Or filter</span>
            <div className="filters__wrapper">
              <button className="filters__btn">Brazil</button>
              <button className="filters__btn">Kenya</button>
              <button className="filters__btn">Columbia</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchSection