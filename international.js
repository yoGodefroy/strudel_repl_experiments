stack(
note(`
     [bb3 eb3 gb ab]@1.5 
     [a bb a ab]@1.5 gb bb3 db3 
     eb3@2 [f gb f eb3]@1.5 db3 
     eb3@2 [db3 eb3 db3 bb3]@1.5 cb3 
     bb3@2 [bb3 eb3 gb ab]@1.5
     [a bb a ab]@1.5 gb bb3 db3 
     eb3@2 [db3 eb3 deb3 bb3]@1.5 cb3
     bb3@2 ~ ~ ~ 
`)
  .sound("sine")
  .jux(rev)
  .slow(2.5),
  s("[bd:1*4, bd:2*4, [~ <[sd:3, sd:4] cp:3>]*2, [<hh hc>]*16]").bank('RolandTR808').fast(2)
  
).cpm(60/5)

note("0 1 2").scale("E:minor").sound("piano")

/**
  * a  | b  | c  | d  | e  | f  | g
  * la | si | do | re | mi | fa | sol

  */


  
test: stack(
  note(`<
    [-@1.5 g@0.5] 
    [c4@1.5 b@0.5] 
    [d4@0.5 c4@0.5 g@0.5 e@0.5] 
    [a@2] 
    [f@1 -@0.5 a@0.5] 
    [d4@1.5 c4@0.5] 
    [b@0.5 a@0.5 g@0.5 f@0.5] 
    [e@2] 
    [e@1 -@0.5 g@0.5] 
    [c4@1.5 b@0.5] 
    [d4@0.5 c4@0.5 g@0.5 e@0.5] 
    [a@2] 
    [f@1 d4@0.5 c4@0.5] 
    [b@1.5 d4@0.5] 
    [f4@1.5 b@0.5] 
    c4@2
  >`).s("gm_electric_guitar_jazz").legato("[.2 .6 .4]*3").chop("<4 8 6 10>").gain(1),
  //   note(`<
  //   [-@1.5 g@0.5] 
  //   [c4@1.5 b@0.5] 
  //   [d4@0.5 c4@0.5 g@0.5 e@0.5] 
  //   [a@2] 
  //   [f@1 -@0.5 a@0.5] 
  //   [d4@1.5 c4@0.5] 
  //   [b@0.5 a@0.5 g@0.5 f@0.5] 
  //   [e@2] 
  //   [e@1 -@0.5 g@0.5] 
  //   [c4@1.5 b@0.5] 
  //   [d4@0.5 c4@0.5 g@0.5 e@0.5] 
  //   [a@2] 
  //   [f@1 d4@0.5 c4@0.5] 
  //   [b@1.5 d4@0.5] 
  //   [f4@1.5 b@0.5] 
  //   c4@2
  // >`).s("gm_slap_bass_1").legato(.8).juxBy(.9,rev).transpose(-24),
  s("bd:[0 1]").struct("x*4, [0 x]*2").lpf(400),
  // s("rim").struct("1(2, 8, <0 2>)*2").penv("-6").lpf(2000).someCycles(x => x.room(.4)),
  // s("hh:[0 1 2]").struct("1(7, 8, <0 1>)*2").penv("-6").pan(sine.fast(2)).hpf(100).lpf(2000)
).hush()


// note(`
//   -@1.5 g@0.5 c4@1.5 b@0.5 d4@0.5 c4@0.5 g@0.5 e@0.5 a@2 f@1.5 -@0.5 a@0.5 d4@1.5 c4@0.5 b@0.5 a@0.5 g@0.5 f@0.5 e@3 -@0.5 g@0.5 c4@1.5 b@0.5 d4@0.5 c4@0.5 g@0.5 e@0.5 a@2 f@1 d4@0.5 c4@0.5 b@1.5 d4@0.5 f4@1.5 b@0.5 c4@2.5
// `).s("square").slow(4).legato(.4).chop("<1 4 8 16>")



samples('https://shabda.ndre.gr/speech/revolution,will,be,streamed,acab.json?gender=m&language=en-GB&strudel=1')
// samples('https://shabda.ndre.gr/speech/revolution,will,be,streamed.json?gender=f&language=en-GB&strudel=1')

$: n(choose("0 3 5 7", "3 0 7 5", "7 5 0 3"))
  .scale("f1:minor")
  .s("supersaw")
  .struct("1(5,8)")
  // .echo(4,1/16,.2)
  .off(1/8, x=>x.struct("1(7,8)"))
  .ftype('24db')
  .attack(choose(".1","0",".2"))
  // .cut(1)
  // .chop(choose(4,8,16,32).fast(8))
  // .legato(1)
  // .slow(2)
  .hush()
  
$: s("bd:<7 8>*4")
  .bank("RolandTR808")
  .struct("1(4,8)")
// .hush()

$: s("cb:<7 1 2 8>*4")
  .bank("RolandTR808")
  .struct("[- 1](9,16)*<1>")
  .gain(0)
  .someCycles(
    x=>x.gain(1)
  )
.hush()

$: s("sd:<6 1>*2")
  .bank("RolandTR808")
  .struct("1(2,8)")
// .hush()

$: s("<hh:3 oh:2>*8")
  .bank("RolandTR808")
  .struct("1(9,16)")
  .pan(noise)
.gain(1.3)
// .hush()

$: n("0 3 8 9 5 7 6")
  .scale("f:minor")
  .s("gm_koto:4")
  .cut(1)
  .struct("1(9,16)*<1>")
  .sometimes(x=>x.jux(rev))
  .hpf("<1000 500 2000 2500>*4")
.hush()

// $: s("acab*4").chop("2 4 8")

$: s("revolution will be streamed")
  .struct("<-!4 1(9,16) -!4 1(13,16)>")
  .slow(2)
  .cut("<0 1>*4")
  .hush()


lalala: note(`<
    [-@1.5 g@0.5] 
    [c4@1.5 b@0.5] 
    [d4@0.5 c4@0.5 g@0.5 e@0.5] 
    [a@2] 
    [f@1 -@0.5 a@0.5] 
    [d4@1.5 c4@0.5] 
    [b@0.5 a@0.5 g@0.5 f@0.5] 
    [e@2] 
    [e@1 -@0.5 g@0.5] 
    [c4@1.5 b@0.5] 
    [d4@0.5 c4@0.5 g@0.5 e@0.5] 
    [a@2] 
    [f@1 d4@0.5 c4@0.5] 
    [b@1.5 d4@0.5] 
    [f4@1.5 b@0.5] 
    c4@2
  >`)
  .s("gm_dulcimer")
  .legato("[2 .6 .4 4]*4")
  .chop("<4 8 6 10>*4")
  .gain(1)
  // .hush()
