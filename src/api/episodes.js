const fetchEpisodeList = showId => {
  return new Promise( (resolve, reject) => {
    if(!!mockData) {
      resolve(mockData)
    } else {
      reject('Error')
    }
  })
}

const mockData = [
  {
    id: 113,
    url: 'http://www.tvmaze.com/episodes/113/arrow-1x01-pilot',
    name: 'Pilot',
    season: 1,
    number: 1,
    airdate: '2012-10-10',
    airtime: '20:00',
    airstamp: '2012-10-11T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/208858.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/208858.jpg'
    },
    summary:
      '<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. Back in Starling City, Oliver slowly reconnects with those closest to him, his devoted mother Moira, beloved sister Thea (, and best friend Tommy Merlyn, but struggles with his ex-girlfriend Dinah "Laurel" Lance, who blames him for her sister\'s death. Oliver has brought back many new skills from his time on the island and despite the watchful eye of his new bodyguard John Diggle, Oliver manages to secretly create the persona of Arrow - a vigilante - to right the wrongs of his family and fight the ills of society. As Arrow, Oliver will atone for the past sins of his family while he searches for the personal redemption he needs.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/113'
      }
    }
  },
  {
    id: 114,
    url: 'http://www.tvmaze.com/episodes/114/arrow-1x02-honor-thy-father',
    name: 'Honor Thy Father',
    season: 1,
    number: 2,
    airdate: '2012-10-17',
    airtime: '20:00',
    airstamp: '2012-10-18T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/208869.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/208869.jpg'
    },
    summary:
      '<p>Oliver heads to the courthouse to get his death certificate repealed and is pleasantly surprised to run into Laurel, who is there prosecuting Martin Somers, a criminal with ties to the Chinese Triad. Oliver recognizes Martin\'s name from his father\'s book and sets his sights on taking him down. Martin orders the Triad to "take care of" Laurel so they send their top mercenary - China White - after her, an act that culminates in a battle between Arrow and China White. Meanwhile, Moira and Walter ask Oliver to take over the company.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/114'
      }
    }
  },
  {
    id: 115,
    url: 'http://www.tvmaze.com/episodes/115/arrow-1x03-lone-gunmen',
    name: 'Lone Gunmen',
    season: 1,
    number: 3,
    airdate: '2012-10-24',
    airtime: '20:00',
    airstamp: '2012-10-25T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/208871.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/208871.jpg'
    },
    summary:
      "<p>Oliver is surprised when someone shoots and kills one of his targets. As his plan is to bring people to justice vs. outright killing them, Oliver doesn't appreciate the help and searches for the gunman. He soon learns that the man, Deadshot, is taking out businessmen who are scheduled to bid at an auction on an energy company and Walteris one of the bidders. Realizing he can't protect his family and stop Deadshot at the same time, Oliver enlists Detective Lance's help, but his plan has dire consequences. Meanwhile, Laurel and Tommy get caught in an awkward situation with Oliver.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/115'
      }
    }
  },
  {
    id: 116,
    url: 'http://www.tvmaze.com/episodes/116/arrow-1x04-an-innocent-man',
    name: 'An Innocent Man',
    season: 1,
    number: 4,
    airdate: '2012-10-31',
    airtime: '20:00',
    airstamp: '2012-11-01T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/208878.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/208878.jpg'
    },
    summary:
      "<p>Oliver still hasn't figured out how to get back in Laurel's good graces, but a late night bonding session with Thea gives him the inspiration he needs. Looking into a suspicious murder case, Oliver realizes an innocent man, Peter Declan, was framed by one of the targets on his list. As Arrow, he asks Laurel to help prove Declan's innocence. Meanwhile, Walter asks one of his employees, Felicity Smoak, to look into a $2.6 million withdrawal that Moira made without his knowledge.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/116'
      }
    }
  },
  {
    id: 117,
    url: 'http://www.tvmaze.com/episodes/117/arrow-1x05-damaged',
    name: 'Damaged',
    season: 1,
    number: 5,
    airdate: '2012-11-07',
    airtime: '20:00',
    airstamp: '2012-11-08T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/208913.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/208913.jpg'
    },
    summary:
      "<p>After Detective Lance arrests Oliver for murder, Oliver tells Moira the only lawyer he'll allow to represent him is Laurel . Laurel takes the case which puts her at odds with her father. Oliver offers to take a polygraph in front Detective Lance but things get tense when Lance asks him if anyone else was on the island with him. Oliver flashes back to when he got his first scar, courtesy of Deathstroke.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/117'
      }
    }
  },
  {
    id: 118,
    url: 'http://www.tvmaze.com/episodes/118/arrow-1x06-legacies',
    name: 'Legacies',
    season: 1,
    number: 6,
    airdate: '2012-11-14',
    airtime: '20:00',
    airstamp: '2012-11-15T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/208924.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/208924.jpg'
    },
    summary:
      "<p>A gang of bank robbers, dubbed The Royal Flush Gang, hits a local bank and seriously wounds an off-duty police officer during a heist. Diggle tells Oliver he needs to deviate from his father's list and start helping the citizens of Starling City. Meanwhile, Tommy asks Thea for relationship advice, but things get awkward when she realizes he was asking about Laurel. Moira confronts Oliver about all of his recent disappearances in the middle of family functions.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/118'
      }
    }
  },
  {
    id: 119,
    url: 'http://www.tvmaze.com/episodes/119/arrow-1x07-muse-of-fire',
    name: 'Muse of Fire',
    season: 1,
    number: 7,
    airdate: '2012-11-28',
    airtime: '20:00',
    airstamp: '2012-11-29T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/208928.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/208928.jpg'
    },
    summary:
      "<p>Oliver encounters a mysterious woman, Helena Bertinelli , daughter of mob boss Frank Bertinelli , who he can finally be himself with, but he soon comes to realize she's hiding dangerous secrets of her own. Helena is on her own personal mission of vengeance and Oliver is caught in the middle. Meanwhile, Tommy is blindsided by an unfortunate turn of events and turns to Laurel for support.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/119'
      }
    }
  },
  {
    id: 120,
    url: 'http://www.tvmaze.com/episodes/120/arrow-1x08-vendetta',
    name: 'Vendetta',
    season: 1,
    number: 8,
    airdate: '2012-12-05',
    airtime: '20:00',
    airstamp: '2012-12-06T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/208938.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/208938.jpg'
    },
    summary:
      "<p>As Oliver and Helena grow closer, Oliver trains her to be his ally, complete with showing her how to use a crossbow. Diggle disapproves of Oliver sharing his secret with Helena as he's not sure she can be trusted, but Oliver refuses to listen to his concerns. Helena's quest for revenge proves to be too strong for Oliver to handle after she kills the head of the Triad and all hell breaks loose.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/120'
      }
    }
  },
  {
    id: 121,
    url: 'http://www.tvmaze.com/episodes/121/arrow-1x09-years-end',
    name: "Year's End",
    season: 1,
    number: 9,
    airdate: '2012-12-12',
    airtime: '20:00',
    airstamp: '2012-12-13T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/208939.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/208939.jpg'
    },
    summary:
      "<p>Oliver discovers that after he and his father went missing, Moira and Thea stopped celebrating Christmas. Determined to make up for lost time and restore a sense of normalcy to the Queen household, Oliver decides to throw the family a Christmas party. Meanwhile, Tommy asks Laurel to spend Christmas with him but she points out that Christmas was also her sister Sara's birthday and she needs to be with her father. Tommy suggests changing things up might be the best way for everyone to heal but Laurel isn't sure her father is ready for that. Meanwhile, Diggle tells Oliver someone is murdering the people on his father's list with arrows, which sends Oliver off to face his toughest adversary yet.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/121'
      }
    }
  },
  {
    id: 122,
    url: 'http://www.tvmaze.com/episodes/122/arrow-1x10-burned',
    name: 'Burned',
    season: 1,
    number: 10,
    airdate: '2013-01-16',
    airtime: '20:00',
    airstamp: '2013-01-17T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/209309.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/209309.jpg'
    },
    summary:
      "<p>Oliver's confidence is shaken after being beaten by the Dark Archer and he takes a break from being Arrow. However, when Laurel calls Arrow for help investigating a firefighter's suspicious death, he reluctantly agrees but his hesitance while fighting almost costs him his life. Meanwhile, Tommy throws a benefit for the firefighters and Thea tries to lift Moira out of her depressive state.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/122'
      }
    }
  },
  {
    id: 123,
    url: 'http://www.tvmaze.com/episodes/123/arrow-1x11-trust-but-verify',
    name: 'Trust But Verify',
    season: 1,
    number: 11,
    airdate: '2013-01-23',
    airtime: '20:00',
    airstamp: '2013-01-24T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/209331.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/209331.jpg'
    },
    summary:
      "<p>The next person on Arrow's list is Diggle's commanding officer and mentor from Afghanistan, Ted Gaynor. Oliver suspects Ted is responsible for recent armoured truck robberies, but Diggle defends Ted and takes a job at Ted's security company to keep an eye on him. Oliver decides to make a move on Ted, which puts him at odds with Diggle. Meanwhile, Thea suspects that Moira is having an affair with Malcom. Tommy and Laurel have an awkward dinner with Malcom.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/123'
      }
    }
  },
  {
    id: 124,
    url: 'http://www.tvmaze.com/episodes/124/arrow-1x12-vertigo',
    name: 'Vertigo',
    season: 1,
    number: 12,
    airdate: '2013-01-30',
    airtime: '20:00',
    airstamp: '2013-01-31T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/209360.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/209360.jpg'
    },
    summary:
      '<p>Thea is in trouble with the police after she gets caught using a drug called "Vertigo." Oliver thinks the only way to keep her out of jail is to find the dealer, a man who goes by the name of "The Count". Oliver turns to McKenna Hall, an old flame and current Vice cop, for help. Meanwhile, Laurel steps in to defend Thea, and Felicity gives Oliver some disturbing news about Moira.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/124'
      }
    }
  },
  {
    id: 125,
    url: 'http://www.tvmaze.com/episodes/125/arrow-1x13-betrayal',
    name: 'Betrayal',
    season: 1,
    number: 13,
    airdate: '2013-02-06',
    airtime: '20:00',
    airstamp: '2013-02-07T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/209362.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/209362.jpg'
    },
    summary:
      "<p>Cyrus Vanch, a nefarious criminal, is recently released from prison and intends to re-secure his position as leader of the underworld. His first step is to take down his biggest opponent in the city - Arrow. Meanwhile, Oliver shows Moira his father's notebook and questions her about the names on the list. Thea is miserable as she starts her internship with Laurel at the legal aid office and Detective Lance makes a deadly mistake that puts Laurel in the crosshairs of Vanch.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/125'
      }
    }
  },
  {
    id: 126,
    url: 'http://www.tvmaze.com/episodes/126/arrow-1x14-the-odyssey',
    name: 'The Odyssey',
    season: 1,
    number: 14,
    airdate: '2013-02-13',
    airtime: '20:00',
    airstamp: '2013-02-14T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/84/210409.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/84/210409.jpg'
    },
    summary:
      "<p>After Oliver is shot, he turns to a surprising person for help - Felicity. Diggle is stunned when he sees Felicity walk through the front door of the lair dragging a dying Oliver behind her, and the two team up to save Oliver's life. As Oliver hovers between life and death, he flashes back to a seminal event on the island - a daring escape attempt with his new friend Slade Wilson.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/126'
      }
    }
  },
  {
    id: 127,
    url: 'http://www.tvmaze.com/episodes/127/arrow-1x15-dodger',
    name: 'Dodger',
    season: 1,
    number: 15,
    airdate: '2013-02-20',
    airtime: '20:00',
    airstamp: '2013-02-21T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/84/210416.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/84/210416.jpg'
    },
    summary:
      "<p>Felicity tells Oliver he's all work and no play, so he asks Detective McKenna on a date. A jewel thief named Dodger hits Starling City and targets someone very close to Oliver. Meanwhile, while working with Laurel, Thea gets her purse stolen by a very fast pickpocket named Roy Harper. Moira makes a move against Malcom.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/127'
      }
    }
  },
  {
    id: 128,
    url: 'http://www.tvmaze.com/episodes/128/arrow-1x16-dead-to-rights',
    name: 'Dead to Rights',
    season: 1,
    number: 16,
    airdate: '2013-02-27',
    airtime: '20:00',
    airstamp: '2013-02-28T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/84/210429.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/84/210429.jpg'
    },
    summary:
      '<p>Oliver and Diggle learn that Deadshot is still alive and his next target is Malcom. Malcom invites Tommy to attend a benefit honoring Malcom for his work with Starling City but Tommy refuses to attend. Oliver encourages his friend to mend his relationship with his father while he can. Meanwhile, Oliver struggles to balance his new relationship with McKenna and his duties as Arrow.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/128'
      }
    }
  },
  {
    id: 129,
    url: 'http://www.tvmaze.com/episodes/129/arrow-1x17-the-huntress-returns',
    name: 'The Huntress Returns',
    season: 1,
    number: 17,
    airdate: '2013-03-20',
    airtime: '20:00',
    airstamp: '2013-03-21T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/84/210432.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/84/210432.jpg'
    },
    summary:
      "<p>With his nightclub set to open and a new romance brewing with McKenna, Oliver is as happy as he's been since returning to Starling City. But when Oliver's ex, The Huntress , suddenly returns to town, she threatens to destroy everything and everyone he cares about. Meanwhile, Laurel and her father struggle with the return of Dinah Lance who claims she has proof Sara is still alive. Thea gets Roy Harper a job at Oliver's club, but he's not too inclined to stop his life of crime. Oliver and Tommy are thrilled they were able to get Steve Aoki to play at the opening of their new nightclub, Verdant.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/129'
      }
    }
  },
  {
    id: 130,
    url: 'http://www.tvmaze.com/episodes/130/arrow-1x18-salvation',
    name: 'Salvation',
    season: 1,
    number: 18,
    airdate: '2013-03-27',
    airtime: '20:00',
    airstamp: '2013-03-28T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/84/211028.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/84/211028.jpg'
    },
    summary:
      '<p>An angry resident of The Glades who calls himself "The Savior" embarks on a kidnapping and killing spree to punish those he believes have wronged the residents of his neighborhood. To make things worse, he broadcasts these murders online and claims he was inspired by Arrow\'s vigilantism. Oliver is horrified by this statement and vows to stop "The Savior," but his manhunt in intensified after Thea comes to him in tears and tells him Roy has been kidnapped. Laurel is surprised when her father starts to believe her mother\'s claim that Sara is still alive. Meanwhile, Malcom tells Moira to find the person responsible for his attempted murder.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/130'
      }
    }
  },
  {
    id: 131,
    url: 'http://www.tvmaze.com/episodes/131/arrow-1x19-unfinished-business',
    name: 'Unfinished Business',
    season: 1,
    number: 19,
    airdate: '2013-04-03',
    airtime: '20:00',
    airstamp: '2013-04-04T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/84/211029.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/84/211029.jpg'
    },
    summary:
      '<p>When a young woman meets a violent death after partying at Verdant, Detective Lance and his new partner, Detective Hilton inform Oliver and Tommy that she was on the drug Vertigo. Oliver immediately pays a visit to the mental institution where The Count is locked up, but finds he is in no condition to deal drugs. However, when The Count escapes and Starling City is flooded with even more Vertigo-related violence, Oliver and Diggle make it their mission to track him down. After Detective Lance uncovers incriminating evidence against him, Tommy goes to great lengths to clear his name, and the fallout from his actions leads Tommy down a new, unexpected path. In a flashback to the island, Oliver recalls the lessons he learned from Slade and Shado.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/131'
      }
    }
  },
  {
    id: 132,
    url: 'http://www.tvmaze.com/episodes/132/arrow-1x20-home-invasion',
    name: 'Home Invasion',
    season: 1,
    number: 20,
    airdate: '2013-04-24',
    airtime: '20:00',
    airstamp: '2013-04-25T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/86/215759.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/86/215759.jpg'
    },
    summary:
      "<p>Deadshot returns to Starling City after taking down a U.S. Ambassador and six others overseas. By keeping tabs on A.R.G.U.S.'s manhunt for the assassin, Oliver, Diggle, and Felicity learn that a sting operation is underway to capture Deadshot - alive. Diggle is determined to see his brother's killer dead, with or without Ollie's help. Meanwhile, Laurel takes drastic steps to protect a young witness, exacerbating friction between Tommy and Oliver. Later, Roy Harper unconventionally pursues all leads to find his new hero, but runs afoul of Detective Lance Back on the island, Oliver recalls how Shado helped him incrementally gain confidence with a bow and hit the target for the first time.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/132'
      }
    }
  },
  {
    id: 133,
    url: 'http://www.tvmaze.com/episodes/133/arrow-1x21-the-undertaking',
    name: 'The Undertaking',
    season: 1,
    number: 21,
    airdate: '2013-05-01',
    airtime: '20:00',
    airstamp: '2013-05-02T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/86/215784.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/86/215784.jpg'
    },
    summary:
      "<p>Finding it difficult to mend fences with Tommy and Diggle Oliver instead focuses on crossing another name off the list. While digging through a crooked accountant's laptop, Felicity discovers a transaction that could help Oliver find Walter. To reconfirm the lead, Oliver gambles that Felicity can be counted on in the field for the first time. In a flashback, Malcolm reveals to Robert Queen and Frank Chen painful details surrounding his wife's murder, and how that shaped his plans for the Glades. Meanwhile, Tommy stuns Laurel with the truth.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/133'
      }
    }
  },
  {
    id: 134,
    url:
      'http://www.tvmaze.com/episodes/134/arrow-1x22-darkness-on-the-edge-of-town',
    name: 'Darkness on the Edge of Town',
    season: 1,
    number: 22,
    airdate: '2013-05-08',
    airtime: '20:00',
    airstamp: '2013-05-09T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/86/215788.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/86/215788.jpg'
    },
    summary:
      "<p>With the Undertaking days away, Malcolm dons his black hood to conclude business with seismologist Dr. Brion Markov and his team. Oliver and Moira entertain a number of surprise - and mostly unwelcome - visitors. Hooded confrontations at home and the Meryln Global Group reveal dark secrets. Meanwhile, Roy and Thea are still looking out for a hero. Laurel makes a decision after Tommy's revelation. In a flashback to the island, Oliver, Slade and Shado struggle to prevent Fyers from shooting a Ferris Air jet out of the sky.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/134'
      }
    }
  },
  {
    id: 135,
    url: 'http://www.tvmaze.com/episodes/135/arrow-1x23-sacrifice',
    name: 'Sacrifice',
    season: 1,
    number: 23,
    airdate: '2013-05-15',
    airtime: '20:00',
    airstamp: '2013-05-16T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/86/215828.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/86/215828.jpg'
    },
    summary:
      "<p>Oliver and Diggle race to stop the Dark Archer from unleashing his vengeance on The Glades. However, they run into a roadblock after Detective Lance picks up Felicity for questioning. Tommy and Oliver's already tumultuous relationship takes a turn for the worse after Oliver makes a confession about Laurel. After hearing of the danger in The Glades, Thea races to find Roy, inadvertently putting herself directly in the line of fire for Malcolm's devious plan. On the island, Oliver, Slade and Shado are locked in a life-or-death struggle against Fyers as his missiles lock on a full Ferris Air jetliner.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/135'
      }
    }
  },
  {
    id: 136,
    url: 'http://www.tvmaze.com/episodes/136/arrow-2x01-city-of-heroes',
    name: 'City of Heroes',
    season: 2,
    number: 1,
    airdate: '2013-10-09',
    airtime: '20:00',
    airstamp: '2013-10-10T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4151.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4151.jpg'
    },
    summary:
      "<p>Diggle and Felicity travel to Lian Yu in search of Oliver who left Starling City after The Undertaking. Convinced to return home, Oliver finds that things are in worse shape than he thought - Isabel Rochev is preparing a hostile takeover of Queen Consolidated, Thea refuses to visit Moira in jail, Roy is trying to fill the void left by the Arrow's absence, and Laurel is working with the District Attorney's office to take down the vigilante. Meanwhile, flashbacks to the island show Slade, Shado and Oliver in a desperate situation.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/136'
      }
    }
  },
  {
    id: 137,
    url: 'http://www.tvmaze.com/episodes/137/arrow-2x02-identity',
    name: 'Identity',
    season: 2,
    number: 2,
    airdate: '2013-10-16',
    airtime: '20:00',
    airstamp: '2013-10-17T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4152.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4152.jpg'
    },
    summary:
      '<p>Oliver finds out the medicine that is being sent to Glades Memorial is being hijacked by thieves. Without an influx of supplies, the hospital will close. Roy attempts to stop the thieves, but he fails and is arrested by Officer Lance. Oliver gets into a heated battle with China White and her new partner, Ben Turner, AKA the Bronze Tiger, over the supplies. Meanwhile, Laurel makes plans to catch the Arrow, and Thea gives Roy an ultimatum.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/137'
      }
    }
  },
  {
    id: 138,
    url: 'http://www.tvmaze.com/episodes/138/arrow-2x03-broken-dolls',
    name: 'Broken Dolls',
    season: 2,
    number: 3,
    airdate: '2013-10-23',
    airtime: '20:00',
    airstamp: '2013-10-24T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4153.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4153.jpg'
    },
    summary:
      '<p>Lance learns a criminal named Barton Mathis, whom he put away years ago, broke out of prison during the quake and is back to torturing and murdering women. Felicity offers herself as bait so Arrow, Diggle and Lance can catch this villain, but the plan goes awry. Furious, Mathis kidnaps Laurel in retaliation and plans to murder her while Lance watches. Meanwhile, Thea and Oliver are stunned when District Attorney Adam Donner seeks the death penalty for Moira. Oliver asks Roy to help him find the Canary.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/138'
      }
    }
  },
  {
    id: 139,
    url: 'http://www.tvmaze.com/episodes/139/arrow-2x04-crucible',
    name: 'Crucible',
    season: 2,
    number: 4,
    airdate: '2013-10-30',
    airtime: '20:00',
    airstamp: '2013-10-31T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4154.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4154.jpg'
    },
    summary:
      '<p>Oliver discovers a man who goes by the name "The Mayor" is bringing illegal guns in to The Glades, so Oliver sponsors a "Cash for Guns" event to help clean up the city. Unfortunately, The Mayor crashes the event with his gang and seriously injures Sin. The Canary is furious when she learns her friend is in the hospital and sets out for revenge. Meanwhile, Felicity stuns Oliver with a bit of information about the Canary, Donner asks Laurel to dinner, and Diggle reconnects with an old friend.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/139'
      }
    }
  },
  {
    id: 140,
    url: 'http://www.tvmaze.com/episodes/140/arrow-2x05-league-of-assassins',
    name: 'League of Assassins',
    season: 2,
    number: 5,
    airdate: '2013-11-06',
    airtime: '20:00',
    airstamp: '2013-11-07T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4155.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4155.jpg'
    },
    summary:
      "<p>While Oliver tends to the Canary's wounds, he tries to get her to talk about where she came from but she refuses. However, after Oliver and the Canary are attacked at the Queen mansion by a trained killer from the League of Assassins, she confesses to how she's connected with the nefarious group. Meanwhile with Moira facing multiple counts of murder and conspiracy for her part in the destruction of The Glades, the Assistant District Attorney offers her a choice - plead guilty now and avoid the death penalty or take your chances in court. Thea begs her mother to fight for her life but Moira seems resolute about taking the offer. Meanwhile, Oliver is furious with Laurel for joining the prosecution's team on his mother's case.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/140'
      }
    }
  },
  {
    id: 141,
    url:
      'http://www.tvmaze.com/episodes/141/arrow-2x06-keep-your-enemies-closer',
    name: 'Keep Your Enemies Closer',
    season: 2,
    number: 6,
    airdate: '2013-11-13',
    airtime: '20:00',
    airstamp: '2013-11-14T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4156.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4156.jpg'
    },
    summary:
      "<p>Amanda Waller sends A.R.G.U.S. agents to kidnap Diggle. Waller informs Diggle that Lyla has gone missing after following a lead on Deadshot in Moscow. When Diggle tells the team he's headed to Russia to rescue Lyla, Oliver and Felicity decide to join, but things get messy when Isabel shows up on the tarmac and insists on joining Oliver's \"work trip.\" Meanwhile, Moira's lawyer, Jean, tells Thea that dating Roy, a known criminal, is hurting her mother's case.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/141'
      }
    }
  },
  {
    id: 142,
    url: 'http://www.tvmaze.com/episodes/142/arrow-2x07-state-v-queen',
    name: 'State v. Queen',
    season: 2,
    number: 7,
    airdate: '2013-11-20',
    airtime: '20:00',
    airstamp: '2013-11-21T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4157.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4157.jpg'
    },
    summary:
      "<p>Oliver is concerned when a mysterious illness sweeps the city, infecting hundreds of people, including Diggle. Oliver discovers Vertigo in Diggle's blood and realizes The Count has broken out of prison and is once again distributing his drug. Meanwhile, Moira goes on trial for her participation in the Undertaking. ADA Adam Donner collapses in court with Vertigo symptoms so Laurel must step in and try the case against Moira. Oliver is torn between standing by his family during the trial and catching The Count. However, things change when Felicity follows a lead and walks straight into a trap set by The Count.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/142'
      }
    }
  },
  {
    id: 143,
    url: 'http://www.tvmaze.com/episodes/143/arrow-2x08-the-scientist',
    name: 'The Scientist',
    season: 2,
    number: 8,
    airdate: '2013-12-04',
    airtime: '20:00',
    airstamp: '2013-12-05T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4158.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4158.jpg'
    },
    summary:
      "<p>Seemingly impossible robbery at Queen Consolidated's Applied Sciences Division brings Central City police scientist Barry Allen to town. Citing a similar case back home, Barry offers to help Oliver and team with the investigation. Oliver senses there is more to Barry than meets the eye, but he's distracted by the similarities between this current case and something that happened on the island. Meanwhile, Felicity takes a liking to Barry, which doesn't go unnoticed by Oliver. Sin asks Roy for help when a friend of hers goes missing. Roy is surprised when Thea not only encourages him to help, but joins the search. Unfortunately, Sin's friend is connected to Brother Blood, and their search ultimately gets one of them seriously injured.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/143'
      }
    }
  },
  {
    id: 144,
    url: 'http://www.tvmaze.com/episodes/144/arrow-2x09-three-ghosts',
    name: 'Three Ghosts',
    season: 2,
    number: 9,
    airdate: '2013-12-11',
    airtime: '20:00',
    airstamp: '2013-12-12T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4159.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4159.jpg'
    },
    summary:
      '<p>After a fight with Cyrus Gold AKA the Acolyte, Oliver is drugged and left for dead. Determined to cure him, Felicity makes a risky decision. The cure causes Oliver to hallucinate, and what he sees forces him to confront his past. Meanwhile, Barry continues to help Felicity, and their connection grows stronger. The Arrow asks Lance to look into Gold, but when the stakeout on Gold goes bad, someone is killed. Roy is captured and tortured by Brother Blood.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/144'
      }
    }
  },
  {
    id: 145,
    url: 'http://www.tvmaze.com/episodes/145/arrow-2x10-blast-radius',
    name: 'Blast Radius',
    season: 2,
    number: 10,
    airdate: '2014-01-15',
    airtime: '20:00',
    airstamp: '2014-01-16T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4161.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4161.jpg'
    },
    summary:
      "<p>Oliver must tackle a new threat to the city when bombs start to go off in Starling City. Felicity discovers the person setting them off is Mark Sheffner, a man who goes by the nickname Shrapnel. Arrow discovers Shrapnel's next target is Sebastian Blood's \"Unity Rally\" and tries to talk the alderman out of hosting it, but he refuses. Arrow sets off to stop the bombing, but Shrapnel tricks him and traps him in a bomb-laced antique store where he is unable to move without setting off the device. While Felicity helps Oliver, Diggle races to the plaza to find the bomb before it goes off. Meanwhile, Roy continues to hide his new strength from Thea but, after she witnesses his super strength in action at the rally, she demands answers. Laurel's suspicions about Sebastian grow stronger once she learns that he grew up with Cyrus Gold, the man who killed Lance's partner. After Donner refuses to help her investigate, she turns to Arrow for help.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/145'
      }
    }
  },
  {
    id: 146,
    url: 'http://www.tvmaze.com/episodes/146/arrow-2x11-blind-spot',
    name: 'Blind Spot',
    season: 2,
    number: 11,
    airdate: '2014-01-22',
    airtime: '20:00',
    airstamp: '2014-01-23T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4162.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4162.jpg'
    },
    summary:
      "<p>Oliver is conflicted after Laurel reaches out to the Arrow asking him to investigate Sebastian Blood. Oliver is unsure whether to believe her accusations against the man he has publically supported for mayor, but decides to trust Laurel. However, when the pair gets too close to the truth, Sebastian exposes Laurel's drug addiction and has her arrested. Meanwhile, Roy reveals his new super-strength to Sin who wants to test out his abilities. Unfortunately, Roy isn't able to contain his rage once unleashed and almost kills a man. Back on the island, Oliver is surprised when Sarah reveals a secret about Laurel.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/146'
      }
    }
  },
  {
    id: 147,
    url: 'http://www.tvmaze.com/episodes/147/arrow-2x12-tremors',
    name: 'Tremors',
    season: 2,
    number: 12,
    airdate: '2014-01-29',
    airtime: '20:00',
    airstamp: '2014-01-30T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4163.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4163.jpg'
    },
    summary:
      "<p>Arrow offers to train Roy so he can learn to control his newfound super-strength. However, Roy is a rebellious student and refuses to listen unless Arrow reveals his true identity, which Oliver refuses to do. Meanwhile, the Bronze Tiger escapes from prison and steals Malcolm's earthquake machine to sell to the highest bidder. Oliver, Diggle and Felicity attempt to stop the transfer, but Roy gets in the way, putting everyone in danger. Laurel is disbarred and spirals out of control. Moira is thrilled when Walter asks her to dinner, but his reason surprises her. Thea encourages her mother to ask Walter to reconcile.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/147'
      }
    }
  },
  {
    id: 148,
    url: 'http://www.tvmaze.com/episodes/148/arrow-2x13-heir-to-the-demon',
    name: 'Heir to the Demon',
    season: 2,
    number: 13,
    airdate: '2014-02-05',
    airtime: '20:00',
    airstamp: '2014-02-06T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4164.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4164.jpg'
    },
    summary:
      "<p>As Laurel continues to unravel, Oliver and Lance try to convince Sara to stay in Starling City and finally reunite with Laurel and Dinah. However, Sara's fellow League of Assassins member, Nyssa, comes to bring Sara back to the fold, but when Sara refuses, Nyssa kidnaps Dinah. Realizing she's putting her family in danger by staying in town, Sara considers re-joining the league.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/148'
      }
    }
  },
  {
    id: 149,
    url: 'http://www.tvmaze.com/episodes/149/arrow-2x14-time-of-death',
    name: 'Time of Death',
    season: 2,
    number: 14,
    airdate: '2014-02-26',
    airtime: '20:00',
    airstamp: '2014-02-27T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4165.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4165.jpg'
    },
    summary:
      "<p>Oliver brings Sara into the Arrow team. Watching Oliver and Diggle spar with Sara and talk old scars, Felicity starts to feel left out. The team is investigating a villain named William Tockman, a.k.a. The Clock King, who is a brilliant thief armed with technology that can open any bank vault in Starling City. After The Clock King infiltrates the computer systems in the lair, Felicity feels pressure to prove her worth. When she gets a lead on Tockman's whereabouts, she heads out without the team, putting her in peril. Meanwhile, Oliver throws Sara a welcome home party, but Laurel refuses to attend. After Lance makes his case for a family dinner, Laurel acquiesces, but when Oliver shows up with Sara, she loses her temper on both of them.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/149'
      }
    }
  },
  {
    id: 150,
    url: 'http://www.tvmaze.com/episodes/150/arrow-2x15-the-promise',
    name: 'The Promise',
    season: 2,
    number: 15,
    airdate: '2014-03-05',
    airtime: '20:00',
    airstamp: '2014-03-06T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4166.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4166.jpg'
    },
    summary:
      "<p>Oliver is shocked when he learns that Slade has come to Starling City. Back on the island, as Oliver, Slade and Sara prepare to take over the freighter from Ivo, Sara pulls Oliver aside and tells him he needs to kill Ivo to prevent him from telling Slade what happened with Shado. Oliver feels immense guilt over the situation but realizes Slade's growing rage from the Mirakuru makes him unpredictable and he could turn on his friends if he thinks Oliver is to blame. Oliver agrees to kill Ivo and the battle begins.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/150'
      }
    }
  },
  {
    id: 151,
    url: 'http://www.tvmaze.com/episodes/151/arrow-2x16-suicide-squad',
    name: 'Suicide Squad',
    season: 2,
    number: 16,
    airdate: '2014-03-19',
    airtime: '20:00',
    airstamp: '2014-03-20T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4167.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4167.jpg'
    },
    summary:
      "<p>Following Slade's return and his promise to make good on his threat to destroy Oliver's loved ones, Oliver focuses all his energy on preparing for battle with his former friend. Sarah tries to help but, fearing for her safety, Oliver pushes her away. Meanwhile, Diggle is recruited by Amanda Waller and A.R.G.U.S. to stop a warlord he knew from his time in Afghanistan. Always the solider, Diggle agrees to help. However, he's not prepared when Amanda introduces him to the rest of the team - Deadshot, Bronze Tiger and Shrapnel, all criminals he and Arrow helped put away. Lyla defends the team and explains the world is a complicated place, but Diggle isn't sure he agrees. When the mission takes a dangerous turn, Diggle is forced to make a difficult decision.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/151'
      }
    }
  },
  {
    id: 152,
    url: 'http://www.tvmaze.com/episodes/152/arrow-2x17-birds-of-prey',
    name: 'Birds of Prey',
    season: 2,
    number: 17,
    airdate: '2014-03-26',
    airtime: '20:00',
    airstamp: '2014-03-27T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4168.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4168.jpg'
    },
    summary:
      "<p>When Frank Bertinelli is arrested, Oliver knows it's only a matter of time before his daughter, Helena, AKA The Huntress, returns to town. To make matters worse, Laurel is picked to try Frank's case, putting her right in the path of Helena. Oliver tells Sara he will handle his ex-girlfriend, but when Helena takes hostages at the courthouse, including Laurel, the Canary will stop at nothing to save her sister. When The Huntress and Canary meet, an epic battle begins. Meanwhile, Roy realizes he needs to keep Thea safe, but doesn't like the way he is forced to go about it.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/152'
      }
    }
  },
  {
    id: 153,
    url: 'http://www.tvmaze.com/episodes/153/arrow-2x18-deathstroke',
    name: 'Deathstroke',
    season: 2,
    number: 18,
    airdate: '2014-04-02',
    airtime: '20:00',
    airstamp: '2014-04-03T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4169.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4169.jpg'
    },
    summary:
      "<p>Slade makes his move against Oliver and the repercussions are enormous. While Oliver scrambles to protect his family, a key player in his team starts to question Oliver's decisions. Meanwhile, Isabel makes her move to take Queen Consolidated away from Oliver.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/153'
      }
    }
  },
  {
    id: 154,
    url:
      'http://www.tvmaze.com/episodes/154/arrow-2x19-the-man-under-the-hood',
    name: 'The Man Under the Hood',
    season: 2,
    number: 19,
    airdate: '2014-04-16',
    airtime: '20:00',
    airstamp: '2014-04-17T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4171.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4171.jpg'
    },
    summary:
      '<p>Oliver, Canary, Diggle and Felicity return to the lair and find Slade waiting for them. An epic battle breaks out and one member of Team Arrow is sent to the hospital. Thea hits her breaking point, but just as Oliver is about to reach her, Slade intervenes and Oliver is faced with a choice - his battle with Slade or his family. Meanwhile, Laurel struggles with a new secret. Jesse</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/154'
      }
    }
  },
  {
    id: 155,
    url: 'http://www.tvmaze.com/episodes/155/arrow-2x20-seeing-red',
    name: 'Seeing Red',
    season: 2,
    number: 20,
    airdate: '2014-04-23',
    airtime: '20:00',
    airstamp: '2014-04-24T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4174.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4174.jpg'
    },
    summary:
      "<p>The mirakuru sends Roy into an uncontrollable rage and he unleashes on the city. After Roy's deadly fight with a police officer, Oliver realizes the mirakuru has taken over Roy completely and must figure out a way to stop him. Things get more complicated after Sara declares that Roy is too far gone and the only way to stop him is to kill him. Meanwhile, Thea believes she can breakthrough to Roy so she goes on camera at Moira's campaign rally to lure him to Verdant. Her ploy works but after Roy attacks Thea, Team Arrow unleashes on him.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/155'
      }
    }
  },
  {
    id: 156,
    url: 'http://www.tvmaze.com/episodes/156/arrow-2x21-city-of-blood',
    name: 'City of Blood',
    season: 2,
    number: 21,
    airdate: '2014-04-30',
    airtime: '20:00',
    airstamp: '2014-05-01T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4173.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4173.jpg'
    },
    summary:
      "<p>After Slade threatens to take everything Oliver loves away, Oliver decides the fastest way to stop further bloodshed is to surrender to his enemy. Knowing that surrender will surely lead to Oliver's death, Diggle and Felicity go to extreme measures to keep Oliver from confronting Slade. Meanwhile, Thea considers leaving town, and Laurel resumes her crusade against Sebastian Blood. Finally, Slade unleashes his assault on Starling City.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/156'
      }
    }
  },
  {
    id: 157,
    url: 'http://www.tvmaze.com/episodes/157/arrow-2x22-streets-of-fire',
    name: 'Streets of Fire',
    season: 2,
    number: 22,
    airdate: '2014-05-07',
    airtime: '20:00',
    airstamp: '2014-05-08T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4175.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4175.jpg'
    },
    summary:
      "<p>Oliver rallies his team as Slade's soldiers attack the city. Felicity gets a call from S.T.A.R. Labs with game-changing news and Thea comes face-to-face with her father - Malcolm Merlyn.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/157'
      }
    }
  },
  {
    id: 158,
    url: 'http://www.tvmaze.com/episodes/158/arrow-2x23-unthinkable',
    name: 'Unthinkable',
    season: 2,
    number: 23,
    airdate: '2014-05-14',
    airtime: '20:00',
    airstamp: '2014-05-15T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4176.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4176.jpg'
    },
    summary:
      "<p>Slade moves forward with his plan to kill one more person in Oliver's life. While Oliver has fought all year to be more than the killer he once was, when Slade kidnaps someone close to Oliver's heart, Oliver is pushed to the edge and realizes sometimes it takes doing the unthinkable to stop the monster. Meanwhile, Diggle takes on Amanda Waller with a little help from some friends, and Thea turns to Roy in her time of need.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/158'
      }
    }
  },
  {
    id: 159,
    url: 'http://www.tvmaze.com/episodes/159/arrow-3x01-the-calm',
    name: 'The Calm',
    season: 3,
    number: 1,
    airdate: '2014-10-08',
    airtime: '20:00',
    airstamp: '2014-10-09T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/3912.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/3912.jpg'
    },
    summary:
      "<p>With crime in Starling City at an all-time low thanks to the Arrow and his team, Oliver thinks he can finally balance being both the Arrow and Oliver Queen and asks Felicity out on a date. However, when a new villain emerges, who has claimed the name Vertigo from the recently deceased Count, Oliver is caught off-guard and someone close to him is hurt. Oliver and a newly suited up Roy take on the Count. Meanwhile, Diggle becomes a father, Lance is promoted to Captain, Laurel joins Arrow's inner circle and Felicity gets a part-time job at a tech store to make ends meet. Also, Oliver fights to regain his company, Queen Consolidated, but comes up against a very worthy opponent - the charming Ray Palmer.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/159'
      }
    }
  },
  {
    id: 160,
    url: 'http://www.tvmaze.com/episodes/160/arrow-3x02-sara',
    name: 'Sara',
    season: 3,
    number: 2,
    airdate: '2014-10-15',
    airtime: '20:00',
    airstamp: '2014-10-16T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/1/4125.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4125.jpg'
    },
    summary:
      "<p>Lance calls the Arrow when another archer appears in town and starts skewering businessmen. Diggle uses A.R.G.U.S. to find the archer's identity; he is a man named Simon Lacroix, who goes by the codename Komodo. However, the team hits a rough patch with the mission and gets help from a surprising source - Laurel. Meanwhile, Oliver begins to worry that he hasn't heard from Thea which forces Roy to tell him the truth about why she left town. Ray Palmer pursues Felicity. In the flashback, Maseo tells Oliver that Amanda Waller has ordered his first kill. As Oliver looks down the scope of the rifle, he sees the target is his best friend, Tommy. Despite her promise to her sister, Laurel debates sharing a secret about Sara with Lance.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/160'
      }
    }
  },
  {
    id: 161,
    url: 'http://www.tvmaze.com/episodes/161/arrow-3x03-corto-maltese',
    name: 'Corto Maltese',
    season: 3,
    number: 3,
    airdate: '2014-10-22',
    airtime: '20:00',
    airstamp: '2014-10-23T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/2/5144.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/2/5144.jpg'
    },
    summary:
      "<p>Oliver decides it's time for Thea to come back to Starling City, so he packs for Corto Maltese, where Felicity has traced Thea's whereabouts. Lyla asks Diggle to go with Oliver because one of her field operatives, Mark Shaw, has gone dark in Corto Maltese and she'd like him to look into it. Feeling responsible for Thea's departure, Roy joins Oliver and Diggle on their journey. Shaw double-crosses Diggle, putting numerous A.R.G.U.S. agents, including Lyla, at risk. Meanwhile, Laurel meets Ted Grant, and Felicity adjusts to her new job.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/161'
      }
    }
  },
  {
    id: 162,
    url: 'http://www.tvmaze.com/episodes/162/arrow-3x04-the-magician',
    name: 'The Magician',
    season: 3,
    number: 4,
    airdate: '2014-10-29',
    airtime: '20:00',
    airstamp: '2014-10-30T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/2/6387.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/2/6387.jpg'
    },
    summary:
      "<p>Furious Nyssa confronts Oliver about Sara. When Oliver learns Malcolm Merlyn is alive, he suspects Merlyn killed Sara. Oliver and Nyssa join forces and go after the Dark Archer, intent on bringing Sara's killer to justice. Laurel keeps her distance from Nyssa, as she blames her sister's death on her involvement with the League of Assassins. Meanwhile, Oliver and Roy work on repairing their respective relationships with Thea, who has returned home. Nyssa discusses Oliver with her father, Ra's al Ghul.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/162'
      }
    }
  },
  {
    id: 163,
    url:
      'http://www.tvmaze.com/episodes/163/arrow-3x05-the-secret-origin-of-felicity-smoak',
    name: 'The Secret Origin of Felicity Smoak',
    season: 3,
    number: 5,
    airdate: '2014-11-05',
    airtime: '20:00',
    airstamp: '2014-11-06T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/3/8065.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/3/8065.jpg'
    },
    summary:
      '<p>When a cyber attack brings Starling City to its knees, Oliver and Felicity are pushed to their limits to contain the destruction. Life gets even more complicated for Felicity when her mother, Donna, stops by for a surprise visit. Meanwhile, Ted Grant questions Laurel\'s motives, and Thea buys an apartment with Malcolm\'s "estate" money, which infuriates Oliver.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/163'
      }
    }
  },
  {
    id: 164,
    url: 'http://www.tvmaze.com/episodes/164/arrow-3x06-guilty',
    name: 'Guilty',
    season: 3,
    number: 6,
    airdate: '2014-11-12',
    airtime: '20:00',
    airstamp: '2014-11-13T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/4/10517.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/4/10517.jpg'
    },
    summary:
      "<p>After a body is found strung up in the Wildcat gym, Ted Grant becomes the main suspect. Oliver and Laurel argue over Ted's innocence. Meanwhile, in flashbacks, when Maseo needs Oliver to remember where an informant for China White stashed key information, he asks Tatsu to help jog Oliver's memory. Roy shares a secret with Felicity.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/164'
      }
    }
  },
  {
    id: 165,
    url: 'http://www.tvmaze.com/episodes/165/arrow-3x07-draw-back-your-bow',
    name: 'Draw Back Your Bow',
    season: 3,
    number: 7,
    airdate: '2014-11-19',
    airtime: '20:00',
    airstamp: '2014-11-20T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/4/11470.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/4/11470.jpg'
    },
    summary:
      '<p>Oliver must stop an Arrow-obsessed serial killer, Carrie Cutter, who is convinced that The Arrow is her one true love and will stop at nothing to get his attention. Unfortunately, her way of getting his attention is to kill people. Meanwhile, Ray asks Felicity to be his date for a work dinner with important clients. Thea auditions new DJs for Verdant and meets Chase, a brash DJ with whom she immediately clashes.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/165'
      }
    }
  },
  {
    id: 45276,
    url:
      'http://www.tvmaze.com/episodes/45276/arrow-3x08-the-brave-and-the-bold',
    name: 'The Brave and the Bold',
    season: 3,
    number: 8,
    airdate: '2014-12-03',
    airtime: '20:00',
    airstamp: '2014-12-04T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/5/13998.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/5/13998.jpg'
    },
    summary:
      '<p>Oliver, Arsenal and Diggle track down the location of a boomerang-wielding killer named Digger Harkness but are surprised when they come face to face with an A.R.G.U.S. team. Diggle asks Lyla why A.R.G.U.S. is involved, but she defers until Harkness attacks the building, killing several agents and targeting Lyla. The Arrow joins the fight and gets help from an old friend - The Flash. Harkness manages to get away and Oliver teams up with Barry again to find him before he can get to Lyla. When Harkness plants five bombs in the city that are timed to explode at the same time, both teams must come together to save the city.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/45276'
      }
    }
  },
  {
    id: 45277,
    url: 'http://www.tvmaze.com/episodes/45277/arrow-3x09-the-climb',
    name: 'The Climb',
    season: 3,
    number: 9,
    airdate: '2014-12-10',
    airtime: '20:00',
    airstamp: '2014-12-11T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/5/14911.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/5/14911.jpg'
    },
    summary:
      "<p>Nyssa returns to Starling City and tells Oliver that her father, Ra's al Ghul has given Oliver 48 hours to find Sara's killer or the League of Assassins will start killing the citizens of Starling City. Laurel is stunned when her father delivers a very special Christmas gift - her mother, Dinah. Meanwhile, Ray tries to make amends with Felicity and Oliver sets a meeting with Ra's al Ghul.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/45277'
      }
    }
  },
  {
    id: 58255,
    url: 'http://www.tvmaze.com/episodes/58255/arrow-3x10-left-behind',
    name: 'Left Behind',
    season: 3,
    number: 10,
    airdate: '2015-01-21',
    airtime: '20:00',
    airstamp: '2015-01-22T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/7/19641.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/7/19641.jpg'
    },
    summary:
      "<p>In the aftermath of Oliver's fight with Ra's al Ghul, Diggle and Arsenal continue to protect the city in the Arrow's absence. However, after three days without hearing from Oliver, they begin to fear the worst may have happened to their friend. Felicity refuses to believe that Oliver could be dead until Merlyn pays the team a surprise visit. Thea suspects there is something more behind Oliver's disappearance and asks Merlyn for a favor. Meanwhile, Ray tests a part of his new suit and Laurel takes up the mantle of the Black Canary.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/58255'
      }
    }
  },
  {
    id: 117429,
    url: 'http://www.tvmaze.com/episodes/117429/arrow-3x11-midnight-city',
    name: 'Midnight City',
    season: 3,
    number: 11,
    airdate: '2015-01-28',
    airtime: '20:00',
    airstamp: '2015-01-29T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/7/19987.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/7/19987.jpg'
    },
    summary:
      "<p>Arsenal and Diggle confront Laurel about trying to step into her sister's shoes and warn her to stop before she gets herself killed. However, when Brick kidnaps the city's Aldermen and threatens to kill them all unless the police evacuate The Glades, it's all suits on deck. Meanwhile, Ray steps in to help Lance and the police force fight Brick, showing Felicity a new side of her boss. Malcom tells Thea that Ra's al Ghul is after him and his family and they must leave town immediately.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/117429'
      }
    }
  },
  {
    id: 118506,
    url: 'http://www.tvmaze.com/episodes/118506/arrow-3x12-uprising',
    name: 'Uprising',
    season: 3,
    number: 12,
    airdate: '2015-02-04',
    airtime: '20:00',
    airstamp: '2015-02-05T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/8/20773.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/8/20773.jpg'
    },
    summary:
      "<p>Still operating without Oliver and desperate to stop Brick, Team Arrow is forced to consider Malcolm's offer to help shut Brick down as Malcolm has a personal score to settle with the felon. Roy and Laurel point out that the team could use some help to save the innocents of The Glades, but Felicity is adamantly against it. They look to Diggle to make the final decision. Meanwhile, the flashbacks chronicle Malcolm's descent from kind-hearted father and husband to cold-blooded killer after the murder of his wife.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/118506'
      }
    }
  },
  {
    id: 122984,
    url: 'http://www.tvmaze.com/episodes/122984/arrow-3x13-canaries',
    name: 'Canaries',
    season: 3,
    number: 13,
    airdate: '2015-02-11',
    airtime: '20:00',
    airstamp: '2015-02-12T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/8/21579.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/8/21579.jpg'
    },
    summary:
      "<p>Oliver is thrown by the changes within Team Arrow. He's used to calling the shots but sees that the team has evolved in his absence and tensions quickly escalate in the lair. Oliver is furious that Laurel has been going out as the Black Canary and tells her to stop risking her life, but when Vertigo hits the streets again, Laurel goes against Oliver's wishes and tracks down Vertigo who hits her with a full dose of the drug. Laurel's biggest fears revolve around her sister Sara so the Vertigo causes her to hallucinate an epic fight between Canary and Black Canary. Meanwhile, Chase surprises Thea, and Roy warns Thea to stay away from Malcolm.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/122984'
      }
    }
  },
  {
    id: 124007,
    url: 'http://www.tvmaze.com/episodes/124007/arrow-3x14-the-return',
    name: 'The Return',
    season: 3,
    number: 14,
    airdate: '2015-02-18',
    airtime: '20:00',
    airstamp: '2015-02-19T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/8/21883.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/8/21883.jpg'
    },
    summary:
      "<p>Malcolm puts Oliver and Thea in a dangerous situation that lands them on Lian Yu with Oliver's former enemy, Deathstroke. A flashback reveals when Oliver and Maseo returned to Starling City to retrieve the Omega bio weapon, and despite being under strict orders from Amanda Waller not to reveal himself to anyone, Oliver looks in on his family, Laurel and Tommy.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/124007'
      }
    }
  },
  {
    id: 128987,
    url: 'http://www.tvmaze.com/episodes/128987/arrow-3x15-nanda-parbat',
    name: 'Nanda Parbat',
    season: 3,
    number: 15,
    airdate: '2015-02-25',
    airtime: '20:00',
    airstamp: '2015-02-26T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/8/22434.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/8/22434.jpg'
    },
    summary:
      "<p>Malcolm is captured by Ra's al Ghul and taken to Nanda Parbat. Because of his love for Thea, Oliver considers saving Merlyn. Ray is obsessed with finishing his Atom suit so he can save the city but Felicity fears he is heading down the same path as Oliver and tries to pull him out of the lab.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/128987'
      }
    }
  },
  {
    id: 140764,
    url: 'http://www.tvmaze.com/episodes/140764/arrow-3x16-the-offer',
    name: 'The Offer',
    season: 3,
    number: 16,
    airdate: '2015-03-18',
    airtime: '20:00',
    airstamp: '2015-03-19T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/9/24095.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/9/24095.jpg'
    },
    summary:
      "<p>Still weighed down by his last meeting with Ra's al Ghul, Oliver returns home to find a new villain and his crew have started terrorizing Starling City - Michael Amar AKA Murmur, a man whose mouth has been sewn shut. Meanwhile, Laurel and Nyssa bond over their issues with their fathers and Nyssa make Laurel an offer. Thea is forced to come to terms with her father after Oliver brings Malcom to the loft to recover, and Lance shuts out both Laurel and the Arrow.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/140764'
      }
    }
  },
  {
    id: 143201,
    url:
      'http://www.tvmaze.com/episodes/143201/arrow-3x17-suicidal-tendencies',
    name: 'Suicidal Tendencies',
    season: 3,
    number: 17,
    airdate: '2015-03-25',
    airtime: '20:00',
    airstamp: '2015-03-26T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/9/24382.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/9/24382.jpg'
    },
    summary:
      "<p>It's celebration time as Diggle and Lyla get married. However, Deadshot interrupts their honeymoon and tells them the Suicide Squad has been given a new mission - rescue United States Senator Joseph Cray from a hostage situation in the Republic of Kasnia. Amanda Waller breaks down the mission and introduces them to the newest member of the Suicide Squad, Cupid. Meanwhile, Oliver learns about Ray's new Atom costume and the two have a heated stand-off. Felicity and Ray hit a rough patch. J</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/143201'
      }
    }
  },
  {
    id: 144440,
    url: 'http://www.tvmaze.com/episodes/144440/arrow-3x18-public-enemy',
    name: 'Public Enemy',
    season: 3,
    number: 18,
    airdate: '2015-04-01',
    airtime: '20:00',
    airstamp: '2015-04-02T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/9/24837.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/9/24837.jpg'
    },
    summary:
      "<p>During an attack on the mayor's office, Ray is critically injured. Felicity is pleasantly surprised when her mother, Donna Smoak, shows up at the hospital to offer her support. With the SCPD out in full force looking for the assailant, Oliver and his team work hard to stay one step ahead of the police to find the man responsible. However, things come to a head when Ra's al Ghul kidnaps Captain Lance.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/144440'
      }
    }
  },
  {
    id: 151049,
    url: 'http://www.tvmaze.com/episodes/151049/arrow-3x19-broken-arrow',
    name: 'Broken Arrow',
    season: 3,
    number: 19,
    airdate: '2015-04-15',
    airtime: '20:00',
    airstamp: '2015-04-16T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/10/25832.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/10/25832.jpg'
    },
    summary:
      '<p>Lance continues his mission to take down the Arrow so Felicity orders Oliver to keep a low profile. However, when a meta-human named Jake Simmons, who kills people with blasts of energy and plasma, starts terrorizing Starling City, Oliver is forced to ask Ray for help. The unlikely duo is forced to team up to save the city.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/151049'
      }
    }
  },
  {
    id: 151050,
    url: 'http://www.tvmaze.com/episodes/151050/arrow-3x20-the-fallen',
    name: 'The Fallen',
    season: 3,
    number: 20,
    airdate: '2015-04-22',
    airtime: '20:00',
    airstamp: '2015-04-23T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/10/26243.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/10/26243.jpg'
    },
    summary:
      "<p>Ra's al Ghul finally makes Oliver an offer he can't refuse. The team joins Oliver on his journey to Nanda Parbat where a heartbroken Felicity decides to take matters into her own hands.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/151050'
      }
    }
  },
  {
    id: 152868,
    url: 'http://www.tvmaze.com/episodes/152868/arrow-3x21-al-sah-him',
    name: 'Al Sah-Him',
    season: 3,
    number: 21,
    airdate: '2015-04-29',
    airtime: '20:00',
    airstamp: '2015-04-30T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/10/26638.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/10/26638.jpg'
    },
    summary:
      '<p>Oliver goes through a rigorous transformation. The League of Assassins sets their sites on Nyssa, who is back in Starling City training Laurel. When Nyssa realizes they are coming, she arms up to face them alone but Laurel asks Felicity and Diggle to help protect her new friend.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/152868'
      }
    }
  },
  {
    id: 152869,
    url:
      'http://www.tvmaze.com/episodes/152869/arrow-3x22-this-is-your-sword',
    name: 'This is Your Sword',
    season: 3,
    number: 22,
    airdate: '2015-05-06',
    airtime: '20:00',
    airstamp: '2015-05-07T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/10/26983.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/10/26983.jpg'
    },
    summary:
      "<p>Oliver/Al Sah-him finishes his training and is left with two final tasks to become the next Ra's al Ghul. Ra's threatens Nyssa and delivers some shocking news. Meanwhile, Malcolm makes a surprising offer to Team Arrow and Thea goes to see Roy.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/152869'
      }
    }
  },
  {
    id: 152993,
    url:
      'http://www.tvmaze.com/episodes/152993/arrow-3x23-my-name-is-oliver-queen',
    name: 'My Name is Oliver Queen',
    season: 3,
    number: 23,
    airdate: '2015-05-13',
    airtime: '20:00',
    airstamp: '2015-05-14T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/10/27485.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/10/27485.jpg'
    },
    summary:
      "<p>With time running out for Starling City, Oliver tries to stop Ra's from unleashing the bioweapon and killing millions.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/152993'
      }
    }
  },
  {
    id: 182148,
    url: 'http://www.tvmaze.com/episodes/182148/arrow-4x01-green-arrow',
    name: 'Green Arrow',
    season: 4,
    number: 1,
    airdate: '2015-10-07',
    airtime: '20:00',
    airstamp: '2015-10-08T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/23/58325.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/23/58325.jpg'
    },
    summary:
      "<p>When a new gang, the Ghosts, hit the newly renamed Star City, Diggle, Thea, and Laurel find themselves in over their heads. Laurel and Thea interrupt Oliver and Felicity's quiet suburban lifestyle to ask them to come back and help.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/182148'
      }
    }
  },
  {
    id: 200321,
    url: 'http://www.tvmaze.com/episodes/200321/arrow-4x02-the-candidate',
    name: 'The Candidate',
    season: 4,
    number: 2,
    airdate: '2015-10-14',
    airtime: '20:00',
    airstamp: '2015-10-15T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/23/59299.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/23/59299.jpg'
    },
    summary:
      "<p>Moira's friend Jessica Danforth decides to run for mayor of Star City. While Team Arrow tries to protect her, Oliver realizes that the Lazarus Pit is taking its toll on Thea. In the past, Oliver meets Baron Blitzkrieg, who offers Oliver a job.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/200321'
      }
    }
  },
  {
    id: 202794,
    url: 'http://www.tvmaze.com/episodes/202794/arrow-4x03-restoration',
    name: 'Restoration',
    season: 4,
    number: 3,
    airdate: '2015-10-21',
    airtime: '20:00',
    airstamp: '2015-10-22T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/25/64181.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/25/64181.jpg'
    },
    summary:
      '<p>Damian brings in a metahuman, Double Down, to take care of Green Arrow. Meanwhile, Diggle and Green Arrow continue working separately because of their past. And Laurel and Thea travel to Nanda Parbat: Thea to find a cure for her bloodlust, and Laurel to resurrect her sister.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/202794'
      }
    }
  },
  {
    id: 203888,
    url: 'http://www.tvmaze.com/episodes/203888/arrow-4x04-beyond-redemption',
    name: 'Beyond Redemption',
    season: 4,
    number: 4,
    airdate: '2015-10-28',
    airtime: '20:00',
    airstamp: '2015-10-29T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/26/66599.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/26/66599.jpg'
    },
    summary:
      "<p>Team Arrow discover that a gang of crooked cops is robbing drug dealers and selling their product. Oliver turns to Quentin for help, but soon learns that he is working with Damian. Meanwhile, Laurel brings Sara to Star City and reunites her with Quentin, but his reaction isn't what she had hoped.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/203888'
      }
    }
  },
  {
    id: 203889,
    url: 'http://www.tvmaze.com/episodes/203889/arrow-4x05-haunted',
    name: 'Haunted',
    season: 4,
    number: 5,
    airdate: '2015-11-04',
    airtime: '20:00',
    airstamp: '2015-11-05T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/28/70144.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/28/70144.jpg'
    },
    summary:
      "<p>Sara goes on a killing spree, and Oliver realizes that when she was brought back, her soul didn't come back with her. As Sara stalks the person who killed her, Oliver turns to an old friend from Lian Yu for help: the sorcerer John Constantine.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/203889'
      }
    }
  },
  {
    id: 227931,
    url: 'http://www.tvmaze.com/episodes/227931/arrow-4x06-lost-souls',
    name: 'Lost Souls',
    season: 4,
    number: 6,
    airdate: '2015-11-11',
    airtime: '20:00',
    airstamp: '2015-11-12T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/29/74139.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/29/74139.jpg'
    },
    summary:
      "<p>Felicity convinces Oliver to launch a desperate rescue attempt to recover a miniaturized Ray from Damien's captivity. Meanwhile, Sara finds herself giving in to the bloodlust of the Lazarus Pit, and Oliver thinks it's a good idea if Felicity takes some time off with her mother Donna.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/227931'
      }
    }
  },
  {
    id: 341013,
    url: 'http://www.tvmaze.com/episodes/341013/arrow-4x07-brotherhood',
    name: 'Brotherhood',
    season: 4,
    number: 7,
    airdate: '2015-11-18',
    airtime: '20:00',
    airstamp: '2015-11-19T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/30/77079.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/30/77079.jpg'
    },
    summary:
      "<p>While Green Arrow and his team set out to recover Andy from Damien's forces, Ray tells Felicity that he's not sure what he's going to do with his future. Meanwhile, Thea receives a visit from Malcolm and gives in to her bloodlust in front of a shocked Alex.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/341013'
      }
    }
  },
  {
    id: 335858,
    url:
      'http://www.tvmaze.com/episodes/335858/arrow-4x08-legends-of-yesterday-part-2',
    name: 'Legends of Yesterday, Part 2',
    season: 4,
    number: 8,
    airdate: '2015-12-02',
    airtime: '20:00',
    airstamp: '2015-12-03T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/32/82480.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/32/82480.jpg'
    },
    summary:
      '<p>The two teams of superheroes take refuge at a farmhouse while Carter trains Kendra in her newfound powers. However, when things go horribly wrong, Flash timejumps and tries to prevent catastrophe from happening again.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/335858'
      }
    }
  },
  {
    id: 378717,
    url: 'http://www.tvmaze.com/episodes/378717/arrow-4x09-dark-waters',
    name: 'Dark Waters',
    season: 4,
    number: 9,
    airdate: '2015-12-09',
    airtime: '20:00',
    airstamp: '2015-12-10T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/34/85249.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/34/85249.jpg'
    },
    summary:
      '<p>Oliver goes public with Damien and HIVE, but is unprepared for the consequences. Meanwhile, Malcolm arrives in Star City to help his daughter, and Felicity discovers that Oliver was going to propose to her.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/378717'
      }
    }
  },
  {
    id: 422665,
    url: 'http://www.tvmaze.com/episodes/422665/arrow-4x10-blood-debts',
    name: 'Blood Debts',
    season: 4,
    number: 10,
    airdate: '2016-01-20',
    airtime: '20:00',
    airstamp: '2016-01-21T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/40/100937.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/40/100937.jpg'
    },
    summary:
      "<p>After Damien's attack on someone close to him, Oliver goes on a bloody manhunt trying to find the HIVE leader. However, Anarky returns to Star City with his own plan for revenge. Meanwhile, Thea confronts her blood lust while Diggle tries to reach his brother.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/422665'
      }
    }
  },
  {
    id: 441945,
    url: 'http://www.tvmaze.com/episodes/441945/arrow-4x11-awol',
    name: 'A.W.O.L.',
    season: 4,
    number: 11,
    airdate: '2016-01-27',
    airtime: '20:00',
    airstamp: '2016-01-28T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/41/104925.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/41/104925.jpg'
    },
    summary:
      "<p>Shadowspire, a rogue military organization with ties to Diggle's time in Afghanistan, launch an attack on the A.R.G.U.S. agents that exposed them years before. Diggle has no choice but to rely on Andy for help. Meanwhile, Felicity confronts a specter from her past while dealing with her new role in Team Arrow.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/441945'
      }
    }
  },
  {
    id: 482755,
    url: 'http://www.tvmaze.com/episodes/482755/arrow-4x12-unchained',
    name: 'Unchained',
    season: 4,
    number: 12,
    airdate: '2016-02-03',
    airtime: '20:00',
    airstamp: '2016-02-04T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/43/108031.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/43/108031.jpg'
    },
    summary:
      "<p>Roy returns to Star City... working for a new villain, the Calculator, a genius computer hacker who plans to bring the city to its knees. Meanwhile, Thea's condition worsens, and in the past, Oliver takes the first step to leaving his darkness behind.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/482755'
      }
    }
  },
  {
    id: 526409,
    url:
      'http://www.tvmaze.com/episodes/526409/arrow-4x13-sins-of-the-father',
    name: 'Sins of the Father',
    season: 4,
    number: 13,
    airdate: '2016-02-10',
    airtime: '20:00',
    airstamp: '2016-02-11T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/44/110612.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/44/110612.jpg'
    },
    summary:
      "<p>Oliver refuses to kill Malcolm in return for Thea's cure, and Malcolm refuses to surrender rulership of the League to save his daughter. Civil war tears through Star City as the two factions fight it out. Meanwhile, Felicity discovers that the Calculator is her father and tests him to see if he can be trusted.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/526409'
      }
    }
  },
  {
    id: 536814,
    url: 'http://www.tvmaze.com/episodes/536814/arrow-4x14-code-of-silence',
    name: 'Code of Silence',
    season: 4,
    number: 14,
    airdate: '2016-02-17',
    airtime: '20:00',
    airstamp: '2016-02-18T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/45/112996.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/45/112996.jpg'
    },
    summary:
      "<p>While Oliver preps for a debate, Quentin tries to shield his new girlfriend Donna from the truth that he was working with HIVE. Both men find themselves with larger problems with Damien unleashes a demolition expert on Star City to guarantee his wife's rise to power.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/536814'
      }
    }
  },
  {
    id: 569141,
    url: 'http://www.tvmaze.com/episodes/569141/arrow-4x15-taken',
    name: 'Taken',
    season: 4,
    number: 15,
    airdate: '2016-02-24',
    airtime: '20:00',
    airstamp: '2016-02-25T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/46/115678.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/46/115678.jpg'
    },
    summary:
      '<p>Damien demands that Oliver resign as a mayoral candidate, or he will kill William. In response, Oliver brings in a superhuman ally, Vixen, to help him track down his son.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/569141'
      }
    }
  },
  {
    id: 627433,
    url: 'http://www.tvmaze.com/episodes/627433/arrow-4x16-broken-hearts',
    name: 'Broken Hearts',
    season: 4,
    number: 16,
    airdate: '2016-03-23',
    airtime: '20:00',
    airstamp: '2016-03-24T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/49/124769.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/49/124769.jpg'
    },
    summary:
      '<p>Cupid returns to Star City and vows to prove to everyone that love is death. Meanwhile, Oliver and Felicity deal with the aftermath of their break-up. In the past, Oliver discovers that Reiter plans to use the lives of the slaves to power a mystical idol hidden deep beneath the island.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/627433'
      }
    }
  },
  {
    id: 627434,
    url: 'http://www.tvmaze.com/episodes/627434/arrow-4x17-beacon-of-hope',
    name: 'Beacon of Hope',
    season: 4,
    number: 17,
    airdate: '2016-03-30',
    airtime: '20:00',
    airstamp: '2016-03-31T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/51/127761.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/51/127761.jpg'
    },
    summary:
      "<p>After hacking her way out of prison, Brie Larvan makes her way to Palmer Tech to steal Felicity's spinal implant. The villain uses her robot bees to cut off all access to the outside world, trapping Felicity, Thea, and Donna inside. Meanwhile, Malcolm delivers a message to Damien in prison.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/627434'
      }
    }
  },
  {
    id: 627435,
    url: 'http://www.tvmaze.com/episodes/627435/arrow-4x18-eleven-fifty-nine',
    name: 'Eleven-Fifty-Nine',
    season: 4,
    number: 18,
    airdate: '2016-04-06',
    airtime: '20:00',
    airstamp: '2016-04-07T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/52/130396.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/52/130396.jpg'
    },
    summary:
      '<p>Team Arrow are forced to trust Andy to help them track down the idol after Malcolm steals it for Damien. However, Oliver and Diggle disagree on whether they can trust Andy, threatening to tear the team apart.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/627435'
      }
    }
  },
  {
    id: 670721,
    url: 'http://www.tvmaze.com/episodes/670721/arrow-4x19-canary-cry',
    name: 'Canary Cry',
    season: 4,
    number: 19,
    airdate: '2016-04-27',
    airtime: '20:00',
    airstamp: '2016-04-28T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/52/130398.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/52/130398.jpg'
    },
    summary:
      "<p>Star City reels under the news that ADA Laurel Lance is dead. However, a new Black Canary emerges... and will kill anyone who she holds responsible for Damian's crimes.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/670721'
      }
    }
  },
  {
    id: 647409,
    url: 'http://www.tvmaze.com/episodes/647409/arrow-4x20-genesis',
    name: 'Genesis',
    season: 4,
    number: 20,
    airdate: '2016-05-04',
    airtime: '20:00',
    airstamp: '2016-05-05T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/55/139934.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/55/139934.jpg'
    },
    summary:
      "<p>Oliver calls in a favor with Constantine and goes to meet with an immortal shaman who can teach him how to fight Damien's dark magic. Meanwhile, Thea takes a break with Alex, while Diggle visits Lyla and Sara.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/647409'
      }
    }
  },
  {
    id: 647410,
    url: 'http://www.tvmaze.com/episodes/647410/arrow-4x21-monument-point',
    name: 'Monument Point',
    season: 4,
    number: 21,
    airdate: '2016-05-11',
    airtime: '20:00',
    airstamp: '2016-05-12T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/55/139942.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/55/139942.jpg'
    },
    summary:
      "<p>The team is forced to find Noah Kuttler--Felicity's father--to disarm the nuclear missiles that Damien has taken control of. However, Damien has sent two of his men to kill Noah and prevent his interference. Meanwhile, Anarky finds Damien's shelter and tries to destroy it.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/647410'
      }
    }
  },
  {
    id: 647411,
    url: 'http://www.tvmaze.com/episodes/647411/arrow-4x22-lost-in-the-flood',
    name: 'Lost in the Flood',
    season: 4,
    number: 22,
    airdate: '2016-05-18',
    airtime: '20:00',
    airstamp: '2016-05-19T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/58/146331.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/58/146331.jpg'
    },
    summary:
      '<p>While Green Arrow and Spartan try to rescue Thea from Tevat Noah, Felicity, Noah, and Curtis try to shut down Rubicon for good. However, Damien has a hacker of his own... and Anarky has his own plans to destroy everything.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/647411'
      }
    }
  },
  {
    id: 647412,
    url: 'http://www.tvmaze.com/episodes/647412/arrow-4x23-schism',
    name: 'Schism',
    season: 4,
    number: 23,
    airdate: '2016-05-25',
    airtime: '20:00',
    airstamp: '2016-05-26T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/59/148546.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/59/148546.jpg'
    },
    summary:
      '<p>With the world counting down to nuclear armageddon, Felicity and Curtis must find a way to stop the missiles. Meanwhile, Oliver tries to convince the citizens of Star City that they are stronger together than apart.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/647412'
      }
    }
  },
  {
    id: 836110,
    url: 'http://www.tvmaze.com/episodes/836110/arrow-5x01-legacy',
    name: 'Legacy',
    season: 5,
    number: 1,
    airdate: '2016-10-05',
    airtime: '20:00',
    airstamp: '2016-10-06T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/78/196410.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/78/196410.jpg'
    },
    summary:
      '<p>Oliver fails his responsibilities as mayor to deal with crime as Green Arrow, and is forced to work alone after Diggle and Thea have retired as vigilantes. In the past, Oliver meets an old friend and discovers that the only way to get close to his target is to join the Bratva.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/836110'
      }
    }
  },
  {
    id: 867627,
    url: 'http://www.tvmaze.com/episodes/867627/arrow-5x02-the-recruits',
    name: 'The Recruits',
    season: 5,
    number: 2,
    airdate: '2016-10-12',
    airtime: '20:00',
    airstamp: '2016-10-13T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/79/199600.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/79/199600.jpg'
    },
    summary:
      "<p>Arrow tries to train his new team of recruits--Evelyn, Rene, and Curtis--the same way that the Bratva trained him. However, things don't go so well and Arrow finds himself on his own when a new vigilante arrives in Star City. Meanwhile, Diggle goes on a mission to recover a nuclear trigger and gets a surprise.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/867627'
      }
    }
  },
  {
    id: 878229,
    url: 'http://www.tvmaze.com/episodes/878229/arrow-5x03-a-matter-of-trust',
    name: 'A Matter of Trust',
    season: 5,
    number: 3,
    airdate: '2016-10-19',
    airtime: '20:00',
    airstamp: '2016-10-20T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/81/202729.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/81/202729.jpg'
    },
    summary:
      "<p>A new metahuman, Sampson, gains the ability to ignore pain and becomes a threat to Star City. Oliver is forced to trust his team if he wants to defeat the man. Meanwhile, Thea makes a mistake while doing her job as mayor's chief of staff, and word of Quentin's hiring gets out. Meanwhile, Diggle decides what to do next when he is prosecuted by the U.S. military.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/878229'
      }
    }
  },
  {
    id: 897637,
    url: 'http://www.tvmaze.com/episodes/897637/arrow-5x04-penance',
    name: 'Penance',
    season: 5,
    number: 4,
    airdate: '2016-10-26',
    airtime: '20:00',
    airstamp: '2016-10-27T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/82/205403.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/82/205403.jpg'
    },
    summary:
      '<p>When Felicity refuses to help Oliver break Diggle out of military prison, Oliver goes it alone. Meanwhile, the new Team Arrow are left on their own to try and find Church and stop his new plan. In the past, Oliver undertakes his third test to join the Bratva.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/897637'
      }
    }
  },
  {
    id: 899907,
    url: 'http://www.tvmaze.com/episodes/899907/arrow-5x05-human-target',
    name: 'Human Target',
    season: 5,
    number: 5,
    airdate: '2016-11-02',
    airtime: '20:00',
    airstamp: '2016-11-03T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/83/207953.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/83/207953.jpg'
    },
    summary:
      "<p>When Church learns Green Arrow's secret identity, he makes plans to kill Oliver... and succeeds. The team learns what Church's plan is and heads out to stop him.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/899907'
      }
    }
  },
  {
    id: 909514,
    url: 'http://www.tvmaze.com/episodes/909514/arrow-5x06-so-it-begins',
    name: 'So It Begins',
    season: 5,
    number: 6,
    airdate: '2016-11-09',
    airtime: '20:00',
    airstamp: '2016-11-10T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/84/210447.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/84/210447.jpg'
    },
    summary:
      "<p>Prometheus claims two more victims, and Oliver realizes that the killings are related to the people on his father's list. His recruits aren't happy to hear that Oliver used to be a serial killer. In the past, Oliver finally meets Kovar and may not live to regret it.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/909514'
      }
    }
  },
  {
    id: 907351,
    url: 'http://www.tvmaze.com/episodes/907351/arrow-5x07-vigilante',
    name: 'Vigilante',
    season: 5,
    number: 7,
    airdate: '2016-11-16',
    airtime: '20:00',
    airstamp: '2016-11-17T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/85/212533.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/85/212533.jpg'
    },
    summary:
      "<p>There's a new crimefighter, Vigilante, in Star City... and his take-no-prisoners approach forces Oliver to confront his past when he killed criminals. Meanwhile, Thea helps Quentin out, and Prometheus makes contact with his secret ally.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/907351'
      }
    }
  },
  {
    id: 966467,
    url: 'http://www.tvmaze.com/episodes/966467/arrow-5x08-invasion',
    name: 'Invasion!',
    season: 5,
    number: 8,
    airdate: '2016-11-30',
    airtime: '20:00',
    airstamp: '2016-12-01T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/87/217899.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/87/217899.jpg'
    },
    summary:
      '<p>The Dominators abduct Oliver, Thea, Sara, Diggle, and Ray, and imprison them in a shared hallucination giving each of them what they want most. Meanwhile, Felicity calls in Cisco, Flash, and Supergirl to help Mr. Terrific, Wild Dog, and Ragman find a piece of stolen technology they need to locate their missing comrades.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/966467'
      }
    }
  },
  {
    id: 962475,
    url:
      'http://www.tvmaze.com/episodes/962475/arrow-5x09-what-we-leave-behind',
    name: 'What We Leave Behind',
    season: 5,
    number: 9,
    airdate: '2016-12-07',
    airtime: '20:00',
    airstamp: '2016-12-08T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/88/220523.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/88/220523.jpg'
    },
    summary:
      '<p>After Prometheus attacks and nearly kills Curtis, the team discovers that he is connected to one of the businessman Oliver killed when he first returned to Star City. Now Prometheus sets out to prove that everyone close to Oliver dies... by killing someone he knows. Meanwhile, an old friend returns to the bunker.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/962475'
      }
    }
  },
  {
    id: 974906,
    url: 'http://www.tvmaze.com/episodes/974906/arrow-5x10-who-are-you',
    name: 'Who Are You?',
    season: 5,
    number: 10,
    airdate: '2017-01-25',
    airtime: '20:00',
    airstamp: '2017-01-26T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/94/237142.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/94/237142.jpg'
    },
    summary:
      "<p>Oliver and the team prepare to celebrate Laurel's miraculous return, but get a rude surprise. Meanwhile, Adrian agrees to help Diggle, while in the past Gregor tortures Oliver until he receives an unexpected visitor.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/974906'
      }
    }
  },
  {
    id: 978994,
    url: 'http://www.tvmaze.com/episodes/978994/arrow-5x11-second-chances',
    name: 'Second Chances',
    season: 5,
    number: 11,
    airdate: '2017-02-01',
    airtime: '20:00',
    airstamp: '2017-02-02T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/96/240313.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/96/240313.jpg'
    },
    summary:
      '<p>The team looks for a new Black Canary and finds a meta with a sonic scream who is going after the man who killed her partner. In the past, Talia offers Oliver a chance to separate himself from the monster within.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/978994'
      }
    }
  },
  {
    id: 995493,
    url: 'http://www.tvmaze.com/episodes/995493/arrow-5x12-bratva',
    name: 'Bratva',
    season: 5,
    number: 12,
    airdate: '2017-02-08',
    airtime: '20:00',
    airstamp: '2017-02-09T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/97/243384.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/97/243384.jpg'
    },
    summary:
      '<p>Oliver and his team travel to Russia to track down General Walker after he escapes custody. When Oliver turns to Anatoly to help them, Anatoly warns that there will be a price. Meanwhile, Susan continues to work at connecting Oliver to Green Arrow.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/995493'
      }
    }
  },
  {
    id: 1001106,
    url:
      'http://www.tvmaze.com/episodes/1001106/arrow-5x13-spectre-of-the-gun',
    name: 'Spectre of the Gun',
    season: 5,
    number: 13,
    airdate: '2017-02-15',
    airtime: '20:00',
    airstamp: '2017-02-16T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/98/246599.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/98/246599.jpg'
    },
    summary:
      "<p>After a masked man shoots up City Hall and kills seven, Oliver realizes that he can do more to stop the violence as mayor than as vigilante. Meanwhile, Rene's life before becoming Wild Dog is revealed in flashback.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1001106'
      }
    }
  },
  {
    id: 1001327,
    url: 'http://www.tvmaze.com/episodes/1001327/arrow-5x14-the-sin-eater',
    name: 'The Sin-Eater',
    season: 5,
    number: 14,
    airdate: '2017-02-22',
    airtime: '20:00',
    airstamp: '2017-02-23T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/99/249046.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/99/249046.jpg'
    },
    summary:
      "<p>Cupid, China White, and Liza Warner escape prison and seek out a stash of Tobias Church's money. Green Arrow and the team prepare to go after them, but the ACU receives a tip tying Arrow to Billy's murder and go after the vigilante. Meanwhile Quentin deals with the new Black Canary, and Thea takes steps to discredit Susan before she can reveal that Oliver is Green Arrow.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1001327'
      }
    }
  },
  {
    id: 1037038,
    url:
      'http://www.tvmaze.com/episodes/1037038/arrow-5x15-fighting-fire-with-fire',
    name: 'Fighting Fire with Fire',
    season: 5,
    number: 15,
    airdate: '2017-03-01',
    airtime: '20:00',
    airstamp: '2017-03-02T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/100/251121.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/100/251121.jpg'
    },
    summary:
      '<p>While Oliver faces mayoral impeachment, Vigilante comes after him and Diggle, Wild Dog, and Mr. Terrific go after him. Meanwhile, Thea asks Felicity to help her get the votes necessary to keep Oliver in office, and Curtis hopes to reunite with his husband after upgrading his technology.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1037038'
      }
    }
  },
  {
    id: 1044109,
    url: 'http://www.tvmaze.com/episodes/1044109/arrow-5x16-checkmate',
    name: 'Checkmate',
    season: 5,
    number: 16,
    airdate: '2017-03-15',
    airtime: '20:00',
    airstamp: '2017-03-16T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/102/255758.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/102/255758.jpg'
    },
    summary:
      "<p>Oliver learns who he's up against, and that Prometheus isn't his only enemy. Meanwhile, Felicity is forced to turn to Helix to get the information she needs to find Susan.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1044109'
      }
    }
  },
  {
    id: 1047345,
    url: 'http://www.tvmaze.com/episodes/1047345/arrow-5x17-kapiushon',
    name: 'Kapiushon',
    season: 5,
    number: 17,
    airdate: '2017-03-22',
    airtime: '20:00',
    airstamp: '2017-03-23T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/103/258506.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/103/258506.jpg'
    },
    summary:
      '<p>Adrian tortures Oliver and demands that he confess his darkest secret. In the past, Oliver and Anatoly make their move against Kovar as he plots a coup against the Russian government.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1047345'
      }
    }
  },
  {
    id: 1058881,
    url: 'http://www.tvmaze.com/episodes/1058881/arrow-5x18-disbanded',
    name: 'Disbanded',
    season: 5,
    number: 18,
    airdate: '2017-03-29',
    airtime: '20:00',
    airstamp: '2017-03-30T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/104/261650.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/104/261650.jpg'
    },
    summary:
      "<p>Oliver disbands the team and makes a deal with the Bratva to eliminate Adrian. However, Diggle refuses to accept his friend's decision and Oliver soon finds himself caught between the two sides. Meanwhile, Curtis makes contact with Helix to find Felicity and expose Adrian's true identity to the world.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1058881'
      }
    }
  },
  {
    id: 1058882,
    url:
      'http://www.tvmaze.com/episodes/1058882/arrow-5x19-dangerous-liaisons',
    name: 'Dangerous Liaisons',
    season: 5,
    number: 19,
    airdate: '2017-04-26',
    airtime: '20:00',
    airstamp: '2017-04-27T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/108/272422.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/108/272422.jpg'
    },
    summary:
      '<p>To get a device that will let the team locate Adrian, Felicity goes in deep with Helix. Meanwhile, Diggle discovers that Lyla is going down the same dark path that Amanda Waller did.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1058882'
      }
    }
  },
  {
    id: 1092413,
    url: 'http://www.tvmaze.com/episodes/1092413/arrow-5x20-underneath',
    name: 'Underneath',
    season: 5,
    number: 20,
    airdate: '2017-05-03',
    airtime: '20:00',
    airstamp: '2017-05-04T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/110/275783.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/110/275783.jpg'
    },
    summary:
      '<p>Oliver and Felicity are trapped in the bunker after Adrian seals the doors and sets off an EMP bomb. While they try to get to the surface after Oliver is badly injured, their teammates try to find a way to help them.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1092413'
      }
    }
  },
  {
    id: 1099860,
    url:
      'http://www.tvmaze.com/episodes/1099860/arrow-5x21-honor-thy-fathers',
    name: 'Honor Thy Fathers',
    season: 5,
    number: 21,
    airdate: '2017-05-10',
    airtime: '20:00',
    airstamp: '2017-05-11T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/111/278137.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/111/278137.jpg'
    },
    summary:
      "<p>Oliver receives a bizarre delivery to his office, which ultimately leads to a secret about Robert that Oliver and Thea soon wish that they'd never learned. Meanwhile, Rene faces a custody hearing for his daughter Zoe.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1099860'
      }
    }
  },
  {
    id: 1106521,
    url: 'http://www.tvmaze.com/episodes/1106521/arrow-5x22-missing',
    name: 'Missing',
    season: 5,
    number: 22,
    airdate: '2017-05-17',
    airtime: '20:00',
    airstamp: '2017-05-18T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/112/280851.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/112/280851.jpg'
    },
    summary:
      '<p>To force Oliver to get him out of prison, Adrian has his allies capture Curtis, Quentin, Thea, Felicity, and Diggle. Oliver has no choice but to gather new allies to stop Adrian and his team.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1106521'
      }
    }
  },
  {
    id: 1098640,
    url: 'http://www.tvmaze.com/episodes/1098640/arrow-5x23-lian-yu',
    name: 'Lian Yu',
    season: 5,
    number: 23,
    airdate: '2017-05-24',
    airtime: '20:00',
    airstamp: '2017-05-25T00:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/113/283578.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/113/283578.jpg'
    },
    summary:
      "<p>Oliver frees Slade and Digger from the supermax to help him defeat Adrian, but things soon go wrong. Meanwhile, Adrian claims that William is dead to get Oliver to reveal that he's the killer that Adrian has always claimed.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1098640'
      }
    }
  },
  {
    id: 1202990,
    url: 'http://www.tvmaze.com/episodes/1202990/arrow-6x01-fallout',
    name: 'Fallout',
    season: 6,
    number: 1,
    airdate: '2017-10-12',
    airtime: '21:00',
    airstamp: '2017-10-13T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/131/327715.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/131/327715.jpg'
    },
    summary:
      '<p>Five months later, Oliver adapts to a new role while Black Siren launches an attack on the police and the team.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1202990'
      }
    }
  },
  {
    id: 1254796,
    url: 'http://www.tvmaze.com/episodes/1254796/arrow-6x02-tribute',
    name: 'Tribute',
    season: 6,
    number: 2,
    airdate: '2017-10-19',
    airtime: '21:00',
    airstamp: '2017-10-20T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/131/329773.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/131/329773.jpg'
    },
    summary:
      '<p>After the photo of Oliver as Green Arrow is released, the FBI launch an investigation. Meanwhile, a former friend abducts Markovian businessmen in Star City to invest in the future.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1254796'
      }
    }
  },
  {
    id: 1260727,
    url: 'http://www.tvmaze.com/episodes/1260727/arrow-6x03-next-of-kin',
    name: 'Next of Kin',
    season: 6,
    number: 3,
    airdate: '2017-10-26',
    airtime: '21:00',
    airstamp: '2017-10-27T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/132/331923.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/132/331923.jpg'
    },
    summary:
      '<p>Diggle has trouble making the tough calls as the new Green Arrow, and his hesitancy may put hundreds of lives in danger when an ex-CIA agent leads a team of former agents on a raid to steal nerve gas. Meanwhile, Oliver asks Felicity to tutor William in math.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1260727'
      }
    }
  },
  {
    id: 1267082,
    url: 'http://www.tvmaze.com/episodes/1267082/arrow-6x04-reversal',
    name: 'Reversal',
    season: 6,
    number: 4,
    airdate: '2017-11-02',
    airtime: '21:00',
    airstamp: '2017-11-03T01:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/133/334267.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/133/334267.jpg'
    },
    summary:
      '<p>Black Siren kills three seemingly unrelated Star City residents, and the team tries to figure out why. Meanwhile, Alena comes to Felicity asking for help with Cayden James, and Oliver deals with having retired as Green Arrow.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1267082'
      }
    }
  },
  {
    id: 1267083,
    url:
      'http://www.tvmaze.com/episodes/1267083/arrow-6x05-deathstroke-returns',
    name: 'Deathstroke Returns',
    season: 6,
    number: 5,
    airdate: '2017-11-09',
    airtime: '21:00',
    airstamp: '2017-11-10T02:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/134/336140.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/134/336140.jpg'
    },
    summary:
      "<p>Slade asks for Oliver's help rescuing Slade's son Joe from a Kasnian prison. Meanwhile, Dinah discovers Vigilante's secret identity and vows to Diggle she will bring him in no matter what.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1267083'
      }
    }
  },
  {
    id: 1267084,
    url: 'http://www.tvmaze.com/episodes/1267084/arrow-6x06-promises-kept',
    name: 'Promises Kept',
    season: 6,
    number: 6,
    airdate: '2017-11-16',
    airtime: '21:00',
    airstamp: '2017-11-17T02:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/135/338504.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/135/338504.jpg'
    },
    summary:
      "<p>While Oliver questions Slade's loyalty, Team Arrow goes after a new drug dealer named Dragon... and only Diggle knows that Dragon manufactures the steroid that he's using.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1267084'
      }
    }
  },
  {
    id: 1267085,
    url: 'http://www.tvmaze.com/episodes/1267085/arrow-6x07-thanksgiving',
    name: 'Thanksgiving',
    season: 6,
    number: 7,
    airdate: '2017-11-23',
    airtime: '21:00',
    airstamp: '2017-11-24T02:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/136/340561.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/136/340561.jpg'
    },
    summary:
      "<p>Samanda arrests Oliver for being Green Arrow, and Cayden and Black Siren launch an attack on Thanksgiving. Meanwhile, Curtis' treatment of Diggle backfires, and Oliver wishes that Thea would wake up.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1267085'
      }
    }
  },
  {
    id: 1328797,
    url:
      'http://www.tvmaze.com/episodes/1328797/arrow-6x08-crisis-on-earth-x-part-2',
    name: 'Crisis on Earth-X, Part 2',
    season: 6,
    number: 8,
    airdate: '2017-11-27',
    airtime: '21:00',
    airstamp: '2017-11-28T02:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/136/341769.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/136/341769.jpg'
    },
    summary:
      "<p>Barry and Iris's wedding brings the gang together, but things go awry when villains from Earth-X attack the ceremony. Oliver and the others square off against their counterparts from Earth-X and discover that they're counterparts of Oliver and Kara... and Reverse-Flash, from before his death.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1328797'
      }
    }
  },
  {
    id: 1337325,
    url:
      'http://www.tvmaze.com/episodes/1337325/arrow-6x09-irreconcilable-differences',
    name: 'Irreconcilable Differences',
    season: 6,
    number: 9,
    airdate: '2017-12-07',
    airtime: '21:00',
    airstamp: '2017-12-08T02:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/137/344485.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/137/344485.jpg'
    },
    summary:
      '<p>Cayden has Black Siren abduct Quentin to force Arrow to recover and hand over an amplifier. Meanwhile, Oliver discovers that someone on the team has betrayed him to the FBI.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1337325'
      }
    }
  },
  {
    id: 1344270,
    url: 'http://www.tvmaze.com/episodes/1344270/arrow-6x10-divided',
    name: 'Divided',
    season: 6,
    number: 10,
    airdate: '2018-01-18',
    airtime: '21:00',
    airstamp: '2018-01-19T02:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/142/357229.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/142/357229.jpg'
    },
    summary:
      "<p>Arrow discovers who Cayden's allies are, and realizes that he's badly outnumbered. However, Curtis, Rene, and Dinah have their own plans. Meanwhile, Quentin worries about getting through to Black Siren while Cayden worries about Vigilante's loyalties.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1344270'
      }
    }
  },
  {
    id: 1351935,
    url: 'http://www.tvmaze.com/episodes/1351935/arrow-6x11-we-fall',
    name: 'We Fall',
    season: 6,
    number: 11,
    airdate: '2018-01-25',
    airtime: '21:00',
    airstamp: '2018-01-26T02:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/143/359264.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/143/359264.jpg'
    },
    summary:
      "<p>Cayden begins a campaign of terror against Star City, using his hack of the city's Internet to take over its electronic systems. The two teams try to stop him, while William learns that Oliver is still Green Arrow.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1351935'
      }
    }
  },
  {
    id: 1356460,
    url: 'http://www.tvmaze.com/episodes/1356460/arrow-6x12-all-for-nothing',
    name: 'All for Nothing',
    season: 6,
    number: 12,
    airdate: '2018-02-01',
    airtime: '21:00',
    airstamp: '2018-02-02T02:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/144/361517.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/144/361517.jpg'
    },
    summary:
      '<p>Vince undertakes a risky mission to obtain the location of the thermobaric bomb for Team Arrow. Meanwhile, Dinah remembers how she met Vince and how they gained their powers.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1356460'
      }
    }
  },
  {
    id: 1375444,
    url:
      'http://www.tvmaze.com/episodes/1375444/arrow-6x13-the-devils-greatest-trick',
    name: "The Devil's Greatest Trick",
    season: 6,
    number: 13,
    airdate: '2018-02-08',
    airtime: '21:00',
    airstamp: '2018-02-09T02:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/145/363696.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/145/363696.jpg'
    },
    summary:
      "<p>Felicity and Alena find the proof showing that Oliver didn't kill Cayden's son... and Cayden demands that the heroes turn over his three former allies, believing one of them is responsible.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1375444'
      }
    }
  },
  {
    id: 1384090,
    url: 'http://www.tvmaze.com/episodes/1384090/arrow-6x14-collision-course',
    name: 'Collision Course',
    season: 6,
    number: 14,
    airdate: '2018-03-01',
    airtime: '21:00',
    airstamp: '2018-03-02T02:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/147/368682.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/147/368682.jpg'
    },
    summary:
      '<p>Thea discovers that Quentin has been hiding Black Siren, and Team Arrow comes to get her and find out where the missing money is. However, the Outsiders follow them and the two teams come to blows.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1384090'
      }
    }
  },
  {
    id: 1392780,
    url: 'http://www.tvmaze.com/episodes/1392780/arrow-6x15-doppelganger',
    name: 'Doppelgänger',
    season: 6,
    number: 15,
    airdate: '2018-03-08',
    airtime: '21:00',
    airstamp: '2018-03-09T02:00:00+00:00',
    runtime: 60,
    image: null,
    summary:
      "<p>Oliver and Thea are shocked to hear that Roy Harper is back in Star City. However, when they discover the circumstances of Roy's return, Oliver and Thea realize that Roy is in trouble and jump in to save him. Black Siren makes a shocking decision.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1392780'
      }
    }
  },
  {
    id: 1392781,
    url:
      'http://www.tvmaze.com/episodes/1392781/arrow-6x16-the-thanatos-guild',
    name: 'The Thanatos Guild',
    season: 6,
    number: 16,
    airdate: '2018-03-22',
    airtime: '21:00',
    airstamp: '2018-03-23T01:00:00+00:00',
    runtime: 60,
    image: null,
    summary: null,
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1392781'
      }
    }
  },
  {
    id: 1412082,
    url: 'http://www.tvmaze.com/episodes/1412082/arrow-6x17-brothers-in-arms',
    name: 'Brothers in Arms',
    season: 6,
    number: 17,
    airdate: '2018-03-29',
    airtime: '21:00',
    airstamp: '2018-03-30T01:00:00+00:00',
    runtime: 60,
    image: null,
    summary: null,
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1412082'
      }
    }
  },
  {
    id: 1412083,
    url: 'http://www.tvmaze.com/episodes/1412083/arrow-6x18-fundamentals',
    name: 'Fundamentals',
    season: 6,
    number: 18,
    airdate: '2018-04-05',
    airtime: '21:00',
    airstamp: '2018-04-06T01:00:00+00:00',
    runtime: 60,
    image: null,
    summary: null,
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1412083'
      }
    }
  },
  {
    id: 1415821,
    url: 'http://www.tvmaze.com/episodes/1415821/arrow-6x19-the-dragon',
    name: 'The Dragon',
    season: 6,
    number: 19,
    airdate: '2018-04-12',
    airtime: '21:00',
    airstamp: '2018-04-13T01:00:00+00:00',
    runtime: 60,
    image: null,
    summary: null,
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1415821'
      }
    }
  }
]

export default fetchEpisodeList