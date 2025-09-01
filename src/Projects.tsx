
function Projects() {
    return (
        <div className="projects" style={{ fontFamily: "'Poppins', sans-serif", maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
            
            <div style={{ marginBottom: '3rem' }}>
                <h4 style={{color : '#7f7098'}}>Targeting strategy for bronchial thermoplasty, PhD project, 2025</h4>
                <p>Bronchial thermoplasty is an asthma treatment, which targets the excessive airway smooth muscle that obstructs flow in asthmatics.
                    This project aims to develop selecting methods to find the best treatment airway sests for patients, thus optimizing the efficacy of bronchial thermoplasty.
                    I have developed as few optimization algorithms on several mathematical modelling of bronchial tree to find the optimal airway sets for bronchial thermoplasty.
                    This projects involves numerical methods, optimization algorithms and statistical analysis for airway selection.
                </p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
                <h4 style={{color : '#7f7098'}}>Neural networks, University project, 2021</h4>  
                <p>I Implemented a stochastic gradient descent algorithm in C++ to train a neural network under supervised learning, 
                    and then tested it in classification tasks. Also, key factors including learning rate, weight and bias, and network size are analyzed
                    for their impact on the accuracy and efficiency of the model.
                </p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
                <h4 style={{color : '#7f7098'}}>Analysis of feature selection algorithms, University project, 2020</h4>
                <p>Feature selection is a key data preprocessing technique aimed at identifying the most valuable features within a dataset. 
                    In this project, several widely used feature selection algorithms are introduced and their performance using classical classifiers on large-scale datasets are evaluated. 
                    I compared these algorithms in terms of classification accuracy and computational efficiency. 
                    By analyzing the experimental results,  we gained deeper insights into the strengths and limitations of each approach, as well as offering practical guidance for selecting appropriate feature selection methods in real-world machine learning applications.</p>
            </div>
            <div className="skills-section py-5">
            <h3 className="mb-4" style={{color : '#7f7098'}}>Technical Skills</h3>
            <div className="row">
            {["Python","MATLAB", "SQL", "React","HTML","CSS"].map(skill => (
                <div className="col-6 col-md-4 col-lg-2 mb-3 text-center" key={skill}>
                 <div className="p-3 rounded shadow-sm" style ={{backgroundColor: "#edecedff"}}>
          {skill}
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
    );
}

export default Projects