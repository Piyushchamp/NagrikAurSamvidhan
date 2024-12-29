// import React from "react";
// import "../css/NewPage.css";
// import { useNavigate } from "react-router-dom";
// import Summarizer from "./Summarizer";

// const NewPage = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="new-page">
//       <div className="cardnewpage">
//         <h2 className="bg-green-500">Welcome to the New Page!</h2>
//         <p>
//           This is where you landed after clicking on the right person.
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           Necessitatibus error aliquam repudiandae totam. Voluptates praesentium
//           voluptate illum nulla fugiat illo inventore incidunt numquam architecto
//           veniam dolorem, repellendus nobis? Nesciunt assumenda architecto,
//           delectus dolores voluptate ratione ullam? Deleniti sunt quis mollitia
//           reprehenderit tempore quibusdam veritatis ea beatae cupiditate
//           accusantium ipsum aspernatur debitis necessitatibus non placeat
//           quisquam a at blanditiis, exercitationem sed, possimus natus quo illo?
//           Corrupti repudiandae molestias quos at porro, quae expedita nihil,
//           labore laudantium sed deserunt eius dolor non eos quo nemo blanditiis
//           illo illum natus error atque voluptatum quis vel culpa? Soluta,
//           libero. Consequatur quam accusamus iure repellat.
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae debitis consequuntur necessitatibus expedita praesentium laboriosam rem. Veritatis, eius. Voluptates, nemo. Dolorum voluptates officiis totam labore iusto recusandae necessitatibus maiores voluptatum voluptas voluptatem, eveniet, quos ducimus vel commodi ab praesentium facilis consequatur architecto quia optio asperiores libero ipsam minima aut? Placeat consectetur quae exercitationem quia veniam, accusamus deleniti dicta praesentium repudiandae, in facere, labore ea quod ipsam illum aspernatur porro asperiores vitae optio facilis laboriosam ratione! Repudiandae velit vitae ullam vero quisquam sapiente, dicta deleniti soluta incidunt eius nemo? Quibusdam nemo necessitatibus omnis? Perferendis minima iste suscipit voluptates quas nisi repellat reprehenderit odit in exercitationem, saepe nam ad dignissimos hic quod laudantium eius architecto neque, obcaecati nemo sapiente eos? Quaerat, aliquid omnis modi, soluta facilis dolor adipisci porro illo voluptatem, reiciendis dicta libero enim magnam laboriosam nihil saepe fugiat! Rerum consequuntur quisquam iste, laudantium fugiat, quod distinctio beatae sunt perferendis numquam autem. Eveniet exercitationem optio fugit sequi consectetur earum dolorem quaerat ex, modi delectus mollitia hic ratione reiciendis odit debitis nulla, illo eius! Atque eius facere voluptate debitis asperiores in inventore repudiandae ipsum distinctio. Repellendus veniam, voluptatibus rerum sapiente voluptate dolores, harum consequuntur ea quae, natus aspernatur totam tempora velit! Autem iste dolores atque? Laboriosam, eaque molestias odio perspiciatis numquam deleniti aspernatur sint praesentium provident pariatur suscipit cumque laborum distinctio, quisquam voluptas odit itaque officiis nemo voluptate possimus accusamus blanditiis dolorum corporis architecto. Ratione a veniam aliquid iusto quasi praesentium voluptas velit in! Accusantium, excepturi asperiores optio distinctio tenetur saepe totam ipsum! Velit est error necessitatibus, pariatur corporis illo tempore tempora explicabo. Vero aperiam sit neque dicta? Laboriosam inventore explicabo nesciunt autem possimus et assumenda vel reiciendis sequi consequuntur corporis similique numquam nulla quo corrupti quos impedit dolorem eaque ipsum nobis consectetur accusamus, officiis vero. Odit, doloribus corporis. Veritatis itaque minus blanditiis reprehenderit quis sit nihil suscipit aut, corporis qui odio nisi ipsa? Assumenda suscipit necessitatibus iusto dolorem incidunt eius odit optio rerum maxime hic! Quisquam, deleniti, iure ipsa labore placeat repellendus obcaecati ullam veritatis hic animi velit incidunt magnam a suscipit voluptatum molestiae dignissimos, ipsum reiciendis accusamus laboriosam unde? Aperiam, odit nesciunt iure molestias debitis recusandae quaerat explicabo vel deserunt dolores velit blanditiis dolorem, quos suscipit error fugit? Eveniet culpa eius fuga, voluptas earum dolores assumenda sequi quae aliquid doloremque voluptates iure nam corrupti, rerum aut ad error dolorem expedita, veniam suscipit beatae esse. At ipsum similique, aliquam error quo deleniti amet, perspiciatis odio ipsam omnis maxime iusto, ipsa voluptates nihil maiores suscipit assumenda corrupti quos aut. Libero ipsam eos minima non ea voluptas assumenda at laboriosam dolores dicta, accusamus velit. Placeat asperiores, voluptates error distinctio molestias laboriosam! Explicabo, commodi? Distinctio aliquid corrupti neque aliquam soluta quia natus eius? Sint, eius nobis ut fugiat voluptates accusantium quas. Corporis architecto, nisi minus asperiores ex atque repudiandae totam ut nam modi natus! Quibusdam, cupiditate ex! Consequatur cupiditate voluptates, reprehenderit nihil, facilis id quas totam facere odio consequuntur aut quisquam numquam. Perspiciatis cumque ea velit fugit sint minus porro. Ex repudiandae in ea?
//         </p>
//       </div>
//       <button className="scroll-to-top-static" onClick={()=>
//         navigate('/summarizer')
//       }>
//         <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_red_4ed1cbfcbc6c9e84c31b987da73fc4168aec8445.svg" className="btn-gemini" /> SUMMARIZE WITH AI
//       </button>
//     </div>
//   );
// };

// export default NewPage;


// import React from "react";
// import "../css/NewPage.css";
// import { useNavigate } from "react-router-dom";
// import { FaCopy } from "react-icons/fa"; // Import the copy icon from react-icons

// const NewPage = () => {
//   const navigate = useNavigate();

//   const handleCopyText = () => {
//     const textToCopy = document.querySelector(".cardnewpage p").innerText;
//     navigator.clipboard.writeText(textToCopy)
//       .then(() => {
//         alert("Text copied to clipboard!"); // Optional: Show an alert for successful copy
//       })
//       .catch((err) => {
//         console.error("Failed to copy text: ", err); // Log errors if any
//       });
//   };

//   return (
//     <div className="new-page">
//       <div className="cardnewpage">
//         <h2 className="bg-green-500">Welcome to the New Page!</h2>
//         <p>
//           This is where you landed after clicking on the right person.
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. {/* Your full text */}
//         </p>
//         <button className="copy-button" onClick={handleCopyText}>
//           <FaCopy style={{ marginRight: "8px" }} /> Copy Text
//         </button>
//       </div>

//       <button className="scroll-to-top-static" onClick={() => navigate('/summarizer')}>
//         <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_red_4ed1cbfcbc6c9e84c31b987da73fc4168aec8445.svg" className="btn-gemini" />
//         SUMMARIZE WITH AI
//       </button>
//     </div>
//   );
// };

// export default NewPage;



import React from "react";
import "../css/NewPage.css";
import { useNavigate } from "react-router-dom";
import { FaCopy } from "react-icons/fa"; // Import the copy icon from react-icons


const NewPage = () => {
  const navigate = useNavigate();

  const handleCopyText = () => {
    const textToCopy = document.querySelector(".cardnewpage h2").innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Text copied to clipboard!"); // Optional: Show an alert for successful copy
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err); // Log errors if any
      });
  };
  return (
    <div className="new-page">
      <div className="cardnewpage">
        <h1>Article 14</h1>
        <h2>
          Article 14 of the Indian Constitution guarantees equality before the law and equal protection of the laws within the territory of India. It is a fundamental right enshrined to promote justice and fairness in a democratic society. This Article reflects the ethos of a welfare state and is aimed at eliminating discrimination while fostering inclusivity and equal treatment for all individuals. It establishes two distinct yet complementary principles: equality before the law and equal protection of the laws.

          The principle of equality before the law originates from the English Common Law and ensures that no individual, regardless of status, rank, or power, is above the law. This implies that everyone is subject to the same legal framework, and arbitrary actions by the state are prohibited. On the other hand, equal protection of the laws is an American concept, emphasizing equality in the application of laws. It mandates that individuals in similar circumstances should be treated equally, fostering substantive justice. While the first principle focuses on impartiality, the second ensures fairness in application.

          Article 14, however, does not mean absolute equality. The Constitution recognizes that treating unequal situations equally would lead to injustice. Thus, it allows for reasonable classification, permitting laws to categorize people or objects for legitimate purposes. For instance, tax slabs based on income or special provisions for women, children, and socially disadvantaged groups like Scheduled Castes and Scheduled Tribes are examples of reasonable classification. However, such classification must not be arbitrary and must meet two key criteria: it must have a legitimate purpose and a rational nexus to the objective sought.

          This balance between equality and classification has been a subject of judicial scrutiny in India. Courts have consistently played a pivotal role in interpreting Article 14, ensuring that classifications align with constitutional mandates. Landmark judgments, such as in State of West Bengal v. Anwar Ali Sarkar and E.P. Royappa v. State of Tamil Nadu, have expanded the scope of Article 14. In the Royappa case, the Supreme Court established the principle that arbitrariness is the antithesis of equality, making the Article a tool to challenge state actions that lack reasonableness.

          Additionally, Article 14 has empowered marginalized groups by striking down laws and practices that promote inequality. For example, in National Legal Services Authority v. Union of India (2014), the Supreme Court recognized the rights of transgender persons, asserting that discrimination against them violates Article 14. Similarly, in Navtej Singh Johar v. Union of India (2018), the Court decriminalized consensual same-sex relationships by declaring Section 377 of the IPC unconstitutional, reinforcing the right to equality.

          Furthermore, Article 14 serves as a foundation for several other rights, such as Articles 15 and 16, which prohibit discrimination and ensure equal opportunities in public employment, respectively. Together, they form a comprehensive framework to promote social justice and uphold the dignity of every individual.

          In contemporary times, Article 14 remains crucial in addressing systemic inequalities and social injustices. Issues like gender inequality, caste-based discrimination, and economic disparities demand an evolving interpretation of equality. The judiciary, along with legislative and executive branches, must continue working towards realizing the constitutional vision of an egalitarian society.

          While Article 14 provides a robust framework, challenges persist in its implementation. Disparities in access to resources, education, and justice systems hinder the realization of equality. Moreover, debates around affirmative action policies highlight the complexities of balancing equality with equity.

          In conclusion, Article 14 embodies the cornerstone of India's commitment to a fair and just society. By ensuring equality before the law and equal protection of laws, it upholds the democratic ideals of the Constitution. However, its true potential lies in bridging societal divides and fostering inclusivity, which requires collective efforts from all stakeholders. As India continues its journey as a diverse and vibrant democracy, Article 14 remains a guiding light in the pursuit of justice, equality, and fraternity.
        </h2>
        <button className="copy-button" onClick={handleCopyText}>
          <FaCopy style={{ marginRight: "8px" }} /> Copy Text
        </button>
      </div>
      <button className="scroll-to-top-static" onClick={() =>
        navigate('/Summarizer')
      }>
        <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_red_4ed1cbfcbc6c9e84c31b987da73fc4168aec8445.svg" className="btn-gemini" /> SUMMARIZE WITH AI
      </button>
    </div>
  );
};

export default NewPage;