function profile() {
  return (
    <main className='content'>
      <div className='bg-photo'></div>
      <div className='main-info'>
        <div className='avatarka'></div>
        <div className='personal-data'>
          <span className='person-name'>Jason Statham</span>
          <div className='person-info'>
            <span className='person-birthday'>Birthday: 26 July</span>
            <span className='person-city'>City: Shirebrook, England</span>
            <span className='person-height'>Height: 1.78 m</span>
            <span className='person-relationship'>Partner: Rosie Huntington-Whiteley</span>
          </div>
        </div>
      </div>

      <div>New post</div>
      <div>My posts</div>
    </main>
  )
}

export default profile