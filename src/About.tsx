// import Button from 'react-bootstrap/Button'

function About(){
    return (
        <div style={{ fontFamily: "'Poppins', sans-serif", maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
        
        <p style={{ backgroundColor: "#edecedff", padding: "1rem", borderRadius: "8px" }}> 
            I had a ton of fun designing and coding this site. I have learned a ton, and definitely made a fair share of mistakes. I am still in learning mode, so I have written down some of the key tricks and techniques I used to bring this site to life.
        </p>    
             <h5 style={{color : '#7f7098'}}>Component-Based Architecture</h5>
        <p>This site is built using a modular, component-based architecture. Each piece of the UI, like the header, project cards, and this accordion, is a self-contained component. 
            This approach makes the code easier to manage, reuse, and debug. For example, the card component is used for skills, projects, and here in this section.</p>
        <h5 style={{color : '#7f7098'}}>TypeScript for Type Safety</h5>
        <p>The entire application is written in TypeScript. By defining explicit types and interfaces for props, state, and data structures (e.g., `Project`, `Skill`), I ensure type safety, which catches errors during development, improves code quality, and makes the codebase more self-documenting and easier to scale.</p>
    
        {/* <p className="mb-2" style={{ fontSize: '0.95rem' }}>
                                    <i className="bi bi-github me-2"></i>
                                    github.com/viasssss
                                </p> */}
        </div>
    )
}

export default About;