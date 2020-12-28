$("#inspired").prop("disabled", false);
$(".morning").ocss

var quoteArray = [
    "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world. ~ Harriet Tubman",
    "I had reasoned this out in my mind, there was one of two things I had a right to, liberty or death; if I could not have one, I would have the other. ~ Harriet Tubman",
    "Power concedes nothing without a demand. It never did and it never will. ~ Frederick Douglas",
    "Let the waters settle and you will see the moon and the stars mirrored in your own being. ~ Rumi",
    "A smile or a tear has no nationality; joy and sorrow speak alike to all nations, and they, above all the confusion of tongues, proclaim the brotherhood of man. ~ Frederick Douglas",
    "The best way to find yourself is to lose yourself in the service of others. ~ Mahatma Ghandi",
    "I object to violence because when it appears to do good, the good is only temporary; the evil it does is permanent. ~ Mahatma Ghandi",
    "The true measure of a man is not how he behaves in moments of comfort and convenience but how he stands at times of controversy and challenges. ~ Rev. Dr. Martin Luther King, Jr.",
    "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward. ~ Rev. Dr Martin Luther King Jr.",
    "Nonviolence is a powerful and just weapon, which cuts without wounding and ennobles the man who wields it. It is a sword that heals. ~ Rev. Dr. Martin Luther King Jr.",
    "Never do things others can do and will do, if there are things others cannot do or will not do. ~ Amelia Earhart",
    "It is no use saying ‘we are doing our best.’ You have got to succeed in doing what is necessary. ~ Winston Churchill",
    "The universe is not outside of you. Look inside yourself; everything that you want, you already are. ~ Rumi",
    "When the power of love overcomes the love of power the world will know peace. ~ Jimi Hendrix",
    "Stop acting so small. You are the universe in ecstatic motion. ~ Rumi",
    "Spread love everywhere you go. ~ Mother Teresa",
    "Most ‘impossible’ goals can be met simply by breaking them down into bite size chunks, writing them down, believing them, and then going full speed ahead as if they were routine. ~ Don Lancaster",
    "Liberty! Freedom! Democracy! True anyhow, no matter how many liars use those words. ~ Langston Hughes",
    "Love one another and help others to rise to the higher levels, simply by pouring out love. Love is infectious and the greatest healing energy. - Sai Baba",
    "We do not have to become heroes overnight. Just a step at a time, meeting each thing that comes up, seeing it as not as dreadful as it appears, discovering that we have the strength to stare it down. ~ Eleanor Roosevelt"
];

$("#inspired").click(function(){

$(".inspiredQuote").show();
randomQuoteDisplay = quoteArray[Math.floor(Math.random() * quoteArray.length)];
$(".randomQuote").text(randomQuoteDisplay);
$(".energeticAdvice").hide();
$(".productiveTips").hide();
$(".appreciativeFacts").hide();
$(".feelRelaxed").hide();
});

$("#energetic").click(function(){
    $(".energeticAdvice").show();
    $(".productiveTips").hide();
    $(".appreciativeFacts").hide();
    $(".feelRelaxed").hide();
    $(".inspiredQuote").hide();
    $(".randomQuote").text("");
});

$("#relaxed").click(function(){
    $(".feelRelaxed").show();
    $(".productiveTips").hide();
    $(".appreciativeFacts").hide();
    $(".energeticAdvice").hide();
    $(".inspiredQuote").hide();
    $(".randomQuote").text("");
})

$("#appreciative").click(function(){
    $(".appreciativeFacts").show();
    $(".productiveTips").hide();
    $(".feelRelaxed").hide();
    $(".energeticAdvice").hide();
    $(".inspiredQuote").hide();
    $(".randomQuote").text("");
})

$("#productive").click(function(){
    $(".productiveTips").show();
    $(".appreciativeFacts").hide();
    $(".feelRelaxed").hide();
    $(".energeticAdvice").hide();
    $(".inspiredQuote").hide();
    $(".randomQuote").text("");
})

