import './App.css';

function App() {
  return (
    <>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center' }}>
        {/* container game */}
        <div
          style={{ 
            width: '350px', 
            height: '500px', 
            border:"2px solid black", 
            borderRadius:'5px 5px 35px 5px' }}
        >
          {/* container screen */}
          <div
            style={{ 
              paddingTop: "5%", 
              justifyContent: "center", 
              display: "flex", 
              paddingBottom:'5%'}}
          >
            <div style={{ 
              width: '85%', 
              height: '200px', 
              backgroundColor: 'olive' }}></div>
          </div>

          {/* Container de botones */}

          <div style={{
            display:'flex', 
            justifyContent:'space-around'}}>
            <div style={{
              width:"60px", 
              height:'60px', 
              backgroundColor:'black'}}>
              <div>
                <button style={{
                  width:'40px', 
                  height:'40px', 
                  backgroundColor:'blue'}}></button>
              </div>
              <div></div>
            </div>

            <div style={{paddingTop:'30%'}}>
            <div style={{
              width:"60px", 
              height:'60px', 
              backgroundColor:'gray'}}>
                <button style={{rotate: '120deg'}}></button>
                <button style={{rotate: '120deg'}}></button>
              </div>
            </div>

            {/* A & B buttons*/}

            <div style={{
              width:"60px", 
              height:'60px', 
              display:'flex',
              backgroundColor:'black'}}>
              <div>
                <button style={{
                  width:'40px', 
                  height:'40px', 
                  backgroundColor:'blue', 
                  borderRadius:'50%'}}></button>
              </div>
              <div>
              <button style={{
                width:'40px', 
                height:'40px', 
                backgroundColor:'blue', 
                borderRadius:'50%'}}></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;