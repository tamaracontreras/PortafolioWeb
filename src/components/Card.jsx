

const Card = () => {
  return (
    <div className="card md:flex bg-slate-100 rounded-xl p-8 md:p-0 hover:shadow-xl transition-shadow duration-300" >
      <div className="card-body p-4">
        <h5 className="card-title text-xl font-bold mb-2">Hello!</h5>
       
        <p className="card-text mb-4">
        Soy Tamara Contreras,  diseñadora y desarrolladora Front-End.<br></br>
        Diseño y desarrollo interfaces web enfocadas en la experiencia del usuario.

        </p>
        <a href="#" className="card-link hover:text-blue-700">See my work</a>
        <a href="#" className="card-link"></a>
      </div>
    </div>
  );
};

export default Card;
