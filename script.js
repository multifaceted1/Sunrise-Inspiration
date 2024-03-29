$("#inspired").prop("disabled", false);
$(".morning").ocss

var quoteArray = [
    "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world. ~ Harriet Tubman",
    "I had reasoned this out in my mind, there was one of two things I had a right to, liberty or death; if I could not have one, I would have the other. ~ Harriet Tubman",
    "Power concedes nothing without a demand. It never did and it never will. ~ Frederick Douglas",
    "A smile or a tear has no nationality; joy and sorrow speak alike to all nations, and they, above all the confusion of tongues, proclaim the brotherhood of man. ~ Frederick Douglas",
    "The best way to find yourself is to lose yourself in the service of others. ~ Mahatma Ghandi",
    "I object to violence because when it appears to do good, the good is only temporary; the evil it does is permanent. ~ Mahatma Ghandi",
    "The true measure of a man is not how he behaves in moments of comfort and convenience but how he stands at times of controversy and challenges. ~ Rev. Dr. Martin Luther King, Jr.",
    "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward. ~ Rev. Dr Martin Luther King Jr.",
    "Nonviolence is a powerful and just weapon, which cuts without wounding and ennobles the man who wields it. It is a sword that heals. ~ Rev. Dr. Martin Luther King Jr.",
    "Never do things others can do and will do, if there are things others cannot do or will not do. ~ Amelia Earhart",
    "It is no use saying ‘we are doing our best.’ You have got to succeed in doing what is necessary. ~ Winston Churchill",
    "When the power of love overcomes the love of power the world will know peace. ~ Jimi Hendrix",
    "We do not have to become heroes overnight. Just a step at a time, meeting each thing that comes up, seeing it as not as dreadful as it appears, discovering that we have the strength to stare it down. ~ Eleanor Roosevelt",
    "Luminous beings we are, not this crude matter. ~ Yoda",
    "Children are educated by what the grown-up is, and not by his talk ~ Carl Jung",
    "Strive not to be a success, but to be of value. ~ Albert Einstein"
];

$("#inspired").click(function(){

$(".inspiredQuote").show();
randomQuoteDisplay = quoteArray[Math.floor(Math.random() * quoteArray.length)];
$(".randomQuote").text(randomQuoteDisplay)});

$("#energetic").click(function(){
    $(".energeticAdvice").show();
    $(".productiveTips").hide();
    $(".appreciativeFacts").hide();
    $(".feelRelaxed").hide();
    $(".inspiredQuote").hide();
});

$("#relaxed").click(function(){
    $(".feelRelaxed").show();
    $(".productiveTips").hide();
    $(".appreciativeFacts").hide();
    $(".energeticAdvice").hide();
    $(".inspiredQuote").hide();
})

$("#appreciative").click(function(){
    $(".appreciativeFacts").show();
    $(".productiveTips").hide();
    $(".feelRelaxed").hide();
    $(".energeticAdvice").hide();
    $(".inspiredQuote").hide();
})

$("#productive").click(function(){
    $(".productiveTips").show();
    $(".appreciativeFacts").hide();
    $(".feelRelaxed").hide();
    $(".energeticAdvice").hide();
    $(".inspiredQuote").hide();
})

