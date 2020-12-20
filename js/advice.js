var article07 = document.createElement('article');

body.appendChild(article07);

article07.setAttribute('class', 'article07');

document.querySelector('.article07').innerHTML += '<div class="container"><div class="row text-center"><h4 class="pad-10">Important advice <span class="light_green">for pregnancy</span></h4></div></div>';

var myadvice = [{

    heading: "Suggestions during pregnancy",
    heading01: "Contact your doctor if",
    heading02: "Additional advice",
}]
document.querySelector('.article07>.container>.row').innerHTML += `
       <div class="col-md-12">
          <div class="tab">
             <button class="accordion">${myadvice[0].heading} ▼</button>
             <div class="panel">
             <ul class="pad-10">
				 <li>Pregnancy is not a disease. It is a physical state. Start by taking care of your physical and mental health.</li>
				 <li>The vomiting that occurs at the beginning of pregnancy can be overcome by eating a little bit of biscuit or toast before getting up from bed.</li>
			  	 <li>Without regular consultation with your gynecologist
				Do not take any medicine or injection.</li>
				 <li>Eat granulated green vegetables, fruits and milk in sufficient quantity.</li>
				 <li>Consume calcium and iron from the fourth month of pregnancy and continue until six months after delivery.</li>
             </ul>
          </div>

        <button class="accordion ">${myadvice[0].heading01} ▼</button>
        <div class="panel">
        <ul class="pad-10">
           <li>Vaginal bleeding or watery.</li>
           <li>Intermittent or persistent abdominal pain.</li>
           <li>Frequent headaches or dizziness.</li>
           <li>Swelling from any part of the body</li>
           <li>Loss of urination and burning sensation in urine.</li>
           <li>Blurry eyes.</li>
           <li>Shortness of breath or persistent cough.</li>
           <li>On a sudden fall or stroke on the stomach.</li>
        </ul>
        </div>

        <button class="accordion">${myadvice[0].heading02} ▼</button>
        <div class="panel">
        <ul class="pad-10">
           <li>Breastfeeding is a good diet, start it as soon as possible.</li>
           <li>Do not eat balanced and postic food.</li>
           <li>Get the mother and baby minors installed.</li>
           <li>To avoid re-conception, get advice related to family planning.</li>
         
        </ul>
        </div>
        </div>
        </div>
`;