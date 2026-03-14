// Verb conjugation database
// Add new verbs here following the same pattern
const verbs = {
    esse: {
        infinitive: 'esse',
        translation: 'to be',
        conjugations: {
            present: {
                sg: { '1': 'sum', '2': 'es', '3': 'est' },
                pl: { '1': 'sumus', '2': 'estis', '3': 'sunt' }
            },
            imperfect: {
                sg: { '1': 'ēram', '2': 'ērās', '3': 'ērat' },
                pl: { '1': 'ērāmus', '2': 'ērātis', '3': 'ērant' }
            },
            perfect: {
                sg: { '1': 'fuī', '2': 'fuistī', '3': 'fuit' },
                pl: { '1': 'fuimus', '2': 'fuistis', '3': 'fuērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'fueram', '2': 'fuerās', '3': 'fuerat' },
                pl: { '1': 'fuerāmus', '2': 'fuerātis', '3': 'fuerant' }
            },
            future1: {
                sg: { '1': 'erō', '2': 'eris', '3': 'erit' },
                pl: { '1': 'erimus', '2': 'eritis', '3': 'erunt' }
            }
        }
    },
    velle: {
        infinitive: 'velle',
        translation: 'to want',
        conjugations: {
            present: {
                sg: { '1': 'volō', '2': 'vis', '3': 'vult' },
                pl: { '1': 'volumus', '2': 'vultis', '3': 'volunt' }
            },
            imperfect: {
                sg: { '1': 'volēbam', '2': 'volēbās', '3': 'volēbat' },
                pl: { '1': 'volēbāmus', '2': 'volēbātis', '3': 'volēbant' }
            },
            perfect: {
                sg: { '1': 'voluī', '2': 'volustī', '3': 'voluit' },
                pl: { '1': 'voluimus', '2': 'voluistis', '3': 'voluerunt' }
            },
            plusquamperfect: {
                sg: { '1': 'volueram', '2': 'volueras', '3': 'voluerat' },
                pl: { '1': 'volueramus', '2': 'volueratis', '3': 'voluerant' }
            },
            future1: {
                sg: { '1': 'volam', '2': 'volēs', '3': 'volet' },
                pl: { '1': 'volēmus', '2': 'volētis', '3': 'volent' }
            }
        }
    },
    nolle: {
        infinitive: 'nolle',
        translation: 'not to want',
        conjugations: {
            present: {
                sg: { '1': 'nolō', '2': 'non vis', '3': 'non vult' },
                pl: { '1': 'nolumus', '2': 'non vultis', '3': 'nolunt' }
            },
            imperfect: {
                sg: { '1': 'nolēbam', '2': 'nolēbās', '3': 'nolēbat' },
                pl: { '1': 'nolēbāmus', '2': 'nolēbātis', '3': 'nolēbant' }
            },
            perfect: {
                sg: { '1': 'noluī', '2': 'nolustī', '3': 'noluit' },
                pl: { '1': 'noluimus', '2': 'noluistis', '3': 'noluērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'nolueram', '2': 'noluerās', '3': 'noluerat' },
                pl: { '1': 'noluerāmus', '2': 'noluerātis', '3': 'noluerant' }
            },
            future1: {
                sg: { '1': 'nolam', '2': 'nolēs', '3': 'nolet' },
                pl: { '1': 'nolēmus', '2': 'nolētis', '3': 'nolent' }
            }
        }
    },
    amare: {
        infinitive: 'amare',
        translation: 'to love',
        conjugations: {
            present: {
                sg: { '1': 'amō', '2': 'amās', '3': 'amat' },
                pl: { '1': 'amāmus', '2': 'amātis', '3': 'amant' }
            },
            imperfect: {
                sg: { '1': 'amābam', '2': 'amābās', '3': 'amābat' },
                pl: { '1': 'amābāmus', '2': 'amābātis', '3': 'amābant' }
            },
            perfect: {
                sg: { '1': 'amāvī', '2': 'amāvistī', '3': 'amāvit' },
                pl: { '1': 'amāvimus', '2': 'amāvistis', '3': 'amāvērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'amāveram', '2': 'amāverās', '3': 'amāverat' },
                pl: { '1': 'amāverāmus', '2': 'amāverātis', '3': 'amāverant' }
            },
            future1: {
                sg: { '1': 'amābō', '2': 'amābis', '3': 'amābit' },
                pl: { '1': 'amābimus', '2': 'amābitis', '3': 'amābunt' }
            }
        }
    },
    laudare: {
        infinitive: 'laudare',
        translation: 'to praise',
        conjugations: {
            present: {
                sg: { '1': 'laudō', '2': 'laudās', '3': 'laudat' },
                pl: { '1': 'laudāmus', '2': 'laudātis', '3': 'laudant' }
            },
            imperfect: {
                sg: { '1': 'laudābam', '2': 'laudābās', '3': 'laudābat' },
                pl: { '1': 'laudābāmus', '2': 'laudābātis', '3': 'laudābant' }
            },
            perfect: {
                sg: { '1': 'laudāvī', '2': 'laudāvistī', '3': 'laudāvit' },
                pl: { '1': 'laudāvimus', '2': 'laudāvistis', '3': 'laudāvērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'laudāveram', '2': 'laudāverās', '3': 'laudāverat' },
                pl: { '1': 'laudāverāmus', '2': 'laudāverātis', '3': 'laudāverant' }
            },
            future1: {
                sg: { '1': 'laudābō', '2': 'laudābis', '3': 'laudābit' },
                pl: { '1': 'laudābimus', '2': 'laudābitis', '3': 'laudābunt' }
            }
        }
    },
    dire: {
        infinitive: 'dire',
        translation: 'to say',
        conjugations: {
            present: {
                sg: { '1': 'dīcō', '2': 'dīcis', '3': 'dīcit' },
                pl: { '1': 'dīcimus', '2': 'dīcitis', '3': 'dīcunt' }
            },
            imperfect: {
                sg: { '1': 'dīcēbam', '2': 'dīcēbās', '3': 'dīcēbat' },
                pl: { '1': 'dīcēbāmus', '2': 'dīcēbātis', '3': 'dīcēbant' }
            },
            perfect: {
                sg: { '1': 'dīxī', '2': 'dīxistī', '3': 'dīxit' },
                pl: { '1': 'dīximus', '2': 'dīxistis', '3': 'dīxērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'dīxeram', '2': 'dīxerās', '3': 'dīxerat' },
                pl: { '1': 'dīxerāmus', '2': 'dīxerātis', '3': 'dīxerant' }
            },
            future1: {
                sg: { '1': 'dīcam', '2': 'dīces', '3': 'dīcet' },
                pl: { '1': 'dīcemus', '2': 'dīcetis', '3': 'dīcent' }
            }
        }
    },
    perdere: {
        infinitive: 'perdere',
        translation: 'to lose/destroy',
        conjugations: {
            present: {
                sg: { '1': 'perdō', '2': 'perdis', '3': 'perdit' },
                pl: { '1': 'perdimus', '2': 'perditis', '3': 'perdunt' }
            },
            imperfect: {
                sg: { '1': 'perdēbam', '2': 'perdēbās', '3': 'perdēbat' },
                pl: { '1': 'perdēbāmus', '2': 'perdēbātis', '3': 'perdēbant' }
            },
            perfect: {
                sg: { '1': 'perdidī', '2': 'perdidistī', '3': 'perdidit' },
                pl: { '1': 'perdidimus', '2': 'perdidistis', '3': 'perdidērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'perdideram', '2': 'perdiderās', '3': 'perdiderat' },
                pl: { '1': 'perdiderāmus', '2': 'perdiderātis', '3': 'perdiderant' }
            },
            future1: {
                sg: { '1': 'perdām', '2': 'perdēs', '3': 'perdet' },
                pl: { '1': 'perdēmus', '2': 'perdētis', '3': 'perdent' }
            }
        }
    },
    credere: {
        infinitive: 'credere',
        translation: 'to believe',
        conjugations: {
            present: {
                sg: { '1': 'credō', '2': 'credis', '3': 'credit' },
                pl: { '1': 'credimus', '2': 'creditis', '3': 'credunt' }
            },
            imperfect: {
                sg: { '1': 'credēbam', '2': 'credēbās', '3': 'credēbat' },
                pl: { '1': 'credēbāmus', '2': 'credēbātis', '3': 'credēbant' }
            },
            perfect: {
                sg: { '1': 'credidī', '2': 'credidistī', '3': 'credidit' },
                pl: { '1': 'credidimus', '2': 'credidistis', '3': 'credidērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'credideram', '2': 'crediderās', '3': 'crediderat' },
                pl: { '1': 'crediderāmus', '2': 'crediderātis', '3': 'crediderant' }
            },
            future1: {
                sg: { '1': 'credām', '2': 'credēs', '3': 'credet' },
                pl: { '1': 'credēmus', '2': 'credētis', '3': 'credent' }
            }
        }
    },
    facere: {
        infinitive: 'facere',
        translation: 'to do/make',
        conjugations: {
            present: {
                sg: { '1': 'faciō', '2': 'facis', '3': 'facit' },
                pl: { '1': 'facimus', '2': 'facitis', '3': 'faciunt' }
            },
            imperfect: {
                sg: { '1': 'faciēbam', '2': 'faciēbās', '3': 'faciēbat' },
                pl: { '1': 'faciēbāmus', '2': 'faciēbātis', '3': 'faciēbant' }
            },
            perfect: {
                sg: { '1': 'fecī', '2': 'fecistī', '3': 'fecit' },
                pl: { '1': 'fecimus', '2': 'fecistis', '3': 'fecērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'feceram', '2': 'fecerās', '3': 'fecerat' },
                pl: { '1': 'fecerāmus', '2': 'fecerātis', '3': 'fecerant' }
            },
            future1: {
                sg: { '1': 'faciam', '2': 'faciēs', '3': 'faciet' },
                pl: { '1': 'faciēmus', '2': 'faciētis', '3': 'facient' }
            }
        }
    },
    habere: {
        infinitive: 'habere',
        translation: 'to have',
        conjugations: {
            present: {
                sg: { '1': 'habeō', '2': 'habēs', '3': 'habet' },
                pl: { '1': 'habēmus', '2': 'habētis', '3': 'habent' }
            },
            imperfect: {
                sg: { '1': 'habēbam', '2': 'habēbās', '3': 'habēbat' },
                pl: { '1': 'habēbāmus', '2': 'habēbātis', '3': 'habēbant' }
            },
            perfect: {
                sg: { '1': 'habuī', '2': 'habuistī', '3': 'habuit' },
                pl: { '1': 'habuimus', '2': 'habuistis', '3': 'habuērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'habueram', '2': 'habuerās', '3': 'habuerat' },
                pl: { '1': 'habuerāmus', '2': 'habuerātis', '3': 'habuerant' }
            },
            future1: {
                sg: { '1': 'habēbō', '2': 'habēbis', '3': 'habēbit' },
                pl: { '1': 'habēbimus', '2': 'habēbitis', '3': 'habēbunt' }
            }
        }
    },
    mittere: {
        infinitive: 'mittere',
        translation: 'to send',
        conjugations: {
            present: {
                sg: { '1': 'mittō', '2': 'mittis', '3': 'mittit' },
                pl: { '1': 'mittimus', '2': 'mittitis', '3': 'mittunt' }
            },
            imperfect: {
                sg: { '1': 'mittēbam', '2': 'mittēbās', '3': 'mittēbat' },
                pl: { '1': 'mittēbāmus', '2': 'mittēbātis', '3': 'mittēbant' }
            },
            perfect: {
                sg: { '1': 'mīsī', '2': 'mīsistī', '3': 'mīsit' },
                pl: { '1': 'mīsimus', '2': 'mīsistis', '3': 'mīsērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'mīseram', '2': 'mīserās', '3': 'mīserat' },
                pl: { '1': 'mīserāmus', '2': 'mīserātis', '3': 'mīserant' }
            },
            future1: {
                sg: { '1': 'mittam', '2': 'mittēs', '3': 'mittet' },
                pl: { '1': 'mittēmus', '2': 'mittētis', '3': 'mittent' }
            }
        }
    },
    interficere: {
        infinitive: 'interficere',
        translation: 'to kill',
        conjugations: {
            present: {
                sg: { '1': 'interficiō', '2': 'interficis', '3': 'interficit' },
                pl: { '1': 'interficimus', '2': 'interficitis', '3': 'interficiunt' }
            },
            imperfect: {
                sg: { '1': 'interficiēbam', '2': 'interficiēbās', '3': 'interficiēbat' },
                pl: { '1': 'interficiēbāmus', '2': 'interficiēbātis', '3': 'interficiēbant' }
            },
            perfect: {
                sg: { '1': 'interfēcī', '2': 'interfecistī', '3': 'interfēcit' },
                pl: { '1': 'interfēcimus', '2': 'interfēcistis', '3': 'interfēcērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'interfēceram', '2': 'interfēcerās', '3': 'interfēcerat' },
                pl: { '1': 'interfēcerāmus', '2': 'interfēcerātis', '3': 'interfēcerant' }
            },
            future1: {
                sg: { '1': 'interficiam', '2': 'interficiēs', '3': 'interficiet' },
                pl: { '1': 'interficiēmus', '2': 'interficiētis', '3': 'interficient' }
            }
        }
    },
    imperare: {
        infinitive: 'imperare',
        translation: 'to command',
        conjugations: {
            present: {
                sg: { '1': 'imperō', '2': 'imperās', '3': 'imperat' },
                pl: { '1': 'imperāmus', '2': 'imperātis', '3': 'imperant' }
            },
            imperfect: {
                sg: { '1': 'imperābam', '2': 'imperābās', '3': 'imperābat' },
                pl: { '1': 'imperābāmus', '2': 'imperābātis', '3': 'imperābant' }
            },
            perfect: {
                sg: { '1': 'imperāvī', '2': 'imperāvistī', '3': 'imperāvit' },
                pl: { '1': 'imperāvimus', '2': 'imperāvistis', '3': 'imperāvērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'imperāveram', '2': 'imperāverās', '3': 'imperāverat' },
                pl: { '1': 'imperāverāmus', '2': 'imperāverātis', '3': 'imperāverant' }
            },
            future1: {
                sg: { '1': 'imperābō', '2': 'imperābis', '3': 'imperābit' },
                pl: { '1': 'imperābimus', '2': 'imperābitis', '3': 'imperābunt' }
            }
        }
    },
    iubere: {
        infinitive: 'iubere',
        translation: 'to order',
        conjugations: {
            present: {
                sg: { '1': 'iubeō', '2': 'iubēs', '3': 'iubet' },
                pl: { '1': 'iubēmus', '2': 'iubētis', '3': 'iubent' }
            },
            imperfect: {
                sg: { '1': 'iubēbam', '2': 'iubēbās', '3': 'iubēbat' },
                pl: { '1': 'iubēbāmus', '2': 'iubēbātis', '3': 'iubēbant' }
            },
            perfect: {
                sg: { '1': 'iussī', '2': 'iussistī', '3': 'iussit' },
                pl: { '1': 'iussimus', '2': 'iussistis', '3': 'iussērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'iusseram', '2': 'iusserās', '3': 'iusserat' },
                pl: { '1': 'iusserāmus', '2': 'iusserātis', '3': 'iusserant' }
            },
            future1: {
                sg: { '1': 'iubēbō', '2': 'iubēbis', '3': 'iubēbit' },
                pl: { '1': 'iubēbimus', '2': 'iubēbitis', '3': 'iubēbunt' }
            }
        }
    },
    superare: {
        infinitive: 'superare',
        translation: 'to overcome',
        conjugations: {
            present: {
                sg: { '1': 'superō', '2': 'superās', '3': 'superat' },
                pl: { '1': 'superāmus', '2': 'superātis', '3': 'superant' }
            },
            imperfect: {
                sg: { '1': 'superābam', '2': 'superābās', '3': 'superābat' },
                pl: { '1': 'superābāmus', '2': 'superābātis', '3': 'superābant' }
            },
            perfect: {
                sg: { '1': 'superāvī', '2': 'superāvistī', '3': 'superāvit' },
                pl: { '1': 'superāvimus', '2': 'superāvistis', '3': 'superāvērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'superāveram', '2': 'superāverās', '3': 'superāverat' },
                pl: { '1': 'superāverāmus', '2': 'superāverātis', '3': 'superāverant' }
            },
            future1: {
                sg: { '1': 'superābō', '2': 'superābis', '3': 'superābit' },
                pl: { '1': 'superābimus', '2': 'superābitis', '3': 'superābunt' }
            }
        }
    },
    appellare: {
        infinitive: 'appellare',
        translation: 'to call/name',
        conjugations: {
            present: {
                sg: { '1': 'appellō', '2': 'appellās', '3': 'appellat' },
                pl: { '1': 'appellāmus', '2': 'appellātis', '3': 'appellant' }
            },
            imperfect: {
                sg: { '1': 'appellābam', '2': 'appellābās', '3': 'appellābat' },
                pl: { '1': 'appellābāmus', '2': 'appellābātis', '3': 'appellābant' }
            },
            perfect: {
                sg: { '1': 'appellāvī', '2': 'appellāvistī', '3': 'appellāvit' },
                pl: { '1': 'appellāvimus', '2': 'appellāvistis', '3': 'appellāvērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'appellāveram', '2': 'appellāverās', '3': 'appellāverat' },
                pl: { '1': 'appellāverāmus', '2': 'appellāverātis', '3': 'appellāverant' }
            },
            future1: {
                sg: { '1': 'appellābō', '2': 'appellābis', '3': 'appellābit' },
                pl: { '1': 'appellābimus', '2': 'appellābitis', '3': 'appellābunt' }
            }
        }
    },
    occurrere: {
        infinitive: 'occurrere',
        translation: 'to encounter',
        conjugations: {
            present: {
                sg: { '1': 'occurrō', '2': 'occurris', '3': 'occurrit' },
                pl: { '1': 'occurrimus', '2': 'occurritis', '3': 'occurrunt' }
            },
            imperfect: {
                sg: { '1': 'occurrēbam', '2': 'occurrēbās', '3': 'occurrēbat' },
                pl: { '1': 'occurrēbāmus', '2': 'occurrēbātis', '3': 'occurrēbant' }
            },
            perfect: {
                sg: { '1': 'occurrī', '2': 'occurristī', '3': 'occurrit' },
                pl: { '1': 'occurrimus', '2': 'occurristis', '3': 'ocurrērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'occurreram', '2': 'occurrerās', '3': 'occurrerat' },
                pl: { '1': 'occurrerāmus', '2': 'occurrerātis', '3': 'occurrerant' }
            },
            future1: {
                sg: { '1': 'occurram', '2': 'occurrēs', '3': 'occurret' },
                pl: { '1': 'occurrēmus', '2': 'occurrētis', '3': 'occurrent' }
            }
        }
    },
    sedere: {
        infinitive: 'sedere',
        translation: 'to sit',
        conjugations: {
            present: {
                sg: { '1': 'sedeō', '2': 'sedēs', '3': 'sedet' },
                pl: { '1': 'sedēmus', '2': 'sedētis', '3': 'sedent' }
            },
            imperfect: {
                sg: { '1': 'sedēbam', '2': 'sedēbās', '3': 'sedēbat' },
                pl: { '1': 'sedēbāmus', '2': 'sedēbātis', '3': 'sedēbant' }
            },
            perfect: {
                sg: { '1': 'sedī', '2': 'sedistī', '3': 'sedit' },
                pl: { '1': 'sedimus', '2': 'sedistis', '3': 'sedērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'sederam', '2': 'sederās', '3': 'sederat' },
                pl: { '1': 'sederāmus', '2': 'sederātis', '3': 'sederant' }
            },
            future1: {
                sg: { '1': 'sedēbō', '2': 'sedēbis', '3': 'sedēbit' },
                pl: { '1': 'sedēbimus', '2': 'sedēbitis', '3': 'sedēbunt' }
            }
        }
    },
    relinquere: {
        infinitive: 'relinquere',
        translation: 'to leave/abandon',
        conjugations: {
            present: {
                sg: { '1': 'relinquō', '2': 'relinquis', '3': 'relinquit' },
                pl: { '1': 'relinquimus', '2': 'relinquitis', '3': 'relinquunt' }
            },
            imperfect: {
                sg: { '1': 'relinquēbam', '2': 'relinquēbās', '3': 'relinquēbat' },
                pl: { '1': 'relinquēbāmus', '2': 'relinquēbātis', '3': 'relinquēbant' }
            },
            perfect: {
                sg: { '1': 'relīquī', '2': 'relīquistī', '3': 'relīquit' },
                pl: { '1': 'relīquimus', '2': 'relīquistis', '3': 'relīquērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'relīqueram', '2': 'relīquerās', '3': 'relīquerat' },
                pl: { '1': 'relīquerāmus', '2': 'relīquerātis', '3': 'relīquerant' }
            },
            future1: {
                sg: { '1': 'relinquam', '2': 'relinquēs', '3': 'relinquet' },
                pl: { '1': 'relinquēmus', '2': 'relinquētis', '3': 'relinquent' }
            }
        }
    },
    aperire: {
        infinitive: 'aperire',
        translation: 'to open',
        conjugations: {
            present: {
                sg: { '1': 'aperiō', '2': 'aperis', '3': 'aperit' },
                pl: { '1': 'aperimus', '2': 'aperitis', '3': 'aperiunt' }
            },
            imperfect: {
                sg: { '1': 'aperiēbam', '2': 'aperiēbās', '3': 'aperiēbat' },
                pl: { '1': 'aperiēbāmus', '2': 'aperiēbātis', '3': 'aperiēbant' }
            },
            perfect: {
                sg: { '1': 'aperuī', '2': 'aperuistī', '3': 'aperuit' },
                pl: { '1': 'aperuimus', '2': 'aperuistis', '3': 'aperuērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'aperueram', '2': 'aperuerās', '3': 'aperuerat' },
                pl: { '1': 'aperuerāmus', '2': 'aperuerātis', '3': 'aperuerant' }
            },
            future1: {
                sg: { '1': 'aperiam', '2': 'aperiēs', '3': 'aperiet' },
                pl: { '1': 'aperiēmus', '2': 'aperiētis', '3': 'aperient' }
            }
        }
    },
    monere: {
        infinitive: 'monere',
        translation: 'to warn/advise',
        conjugations: {
            present: {
                sg: { '1': 'moneō', '2': 'monēs', '3': 'monet' },
                pl: { '1': 'monēmus', '2': 'monētis', '3': 'monent' }
            },
            imperfect: {
                sg: { '1': 'monēbam', '2': 'monēbās', '3': 'monēbat' },
                pl: { '1': 'monēbāmus', '2': 'monēbātis', '3': 'monēbant' }
            },
            perfect: {
                sg: { '1': 'monuī', '2': 'monuistī', '3': 'monuit' },
                pl: { '1': 'monuimus', '2': 'monuistis', '3': 'monuērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'monueram', '2': 'monuerās', '3': 'monuerat' },
                pl: { '1': 'monuerāmus', '2': 'monuerātis', '3': 'monuerant' }
            },
            future1: {
                sg: { '1': 'monēbō', '2': 'monēbis', '3': 'monēbit' },
                pl: { '1': 'monēbimus', '2': 'monēbitis', '3': 'monēbunt' }
            }
        }
    },
    venire: {
        infinitive: 'venire',
        translation: 'to come',
        conjugations: {
            present: {
                sg: { '1': 'veniō', '2': 'venīs', '3': 'venit' },
                pl: { '1': 'venīmus', '2': 'venītis', '3': 'veniunt' }
            },
            imperfect: {
                sg: { '1': 'veniēbam', '2': 'veniēbās', '3': 'veniēbat' },
                pl: { '1': 'veniēbāmus', '2': 'veniēbātis', '3': 'veniēbant' }
            },
            perfect: {
                sg: { '1': 'vēnī', '2': 'vēnistī', '3': 'vēnit' },
                pl: { '1': 'vēnimus', '2': 'vēnistis', '3': 'vēnērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'vēneram', '2': 'vēnerās', '3': 'vēnerat' },
                pl: { '1': 'vēnerāmus', '2': 'vēnerātis', '3': 'vēnerant' }
            },
            future1: {
                sg: { '1': 'veniam', '2': 'veniēs', '3': 'veniet' },
                pl: { '1': 'veniēmus', '2': 'veniētis', '3': 'venient' }
            }
        }
    },
    videre: {
        infinitive: 'videre',
        translation: 'to see',
        conjugations: {
            present: {
                sg: { '1': 'videō', '2': 'vidēs', '3': 'videt' },
                pl: { '1': 'vidēmus', '2': 'vidētis', '3': 'vident' }
            },
            imperfect: {
                sg: { '1': 'vidēbam', '2': 'vidēbās', '3': 'vidēbat' },
                pl: { '1': 'vidēbāmus', '2': 'vidēbātis', '3': 'vidēbant' }
            },
            perfect: {
                sg: { '1': 'vīdī', '2': 'vīdistī', '3': 'vīdit' },
                pl: { '1': 'vīdimus', '2': 'vīdistis', '3': 'vīdērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'vīderam', '2': 'vīderās', '3': 'vīderat' },
                pl: { '1': 'vīderāmus', '2': 'vīderātis', '3': 'vīderant' }
            },
            future1: {
                sg: { '1': 'vidēbō', '2': 'vidēbis', '3': 'vidēbit' },
                pl: { '1': 'vidēbimus', '2': 'vidēbitis', '3': 'vidēbunt' }
            }
        }
    },
    audire: {
        infinitive: 'audire',
        translation: 'to hear',
        conjugations: {
            present: {
                sg: { '1': 'audiō', '2': 'audīs', '3': 'audit' },
                pl: { '1': 'audīmus', '2': 'audītis', '3': 'audiunt' }
            },
            imperfect: {
                sg: { '1': 'audiēbam', '2': 'audiēbās', '3': 'audiēbat' },
                pl: { '1': 'audiēbāmus', '2': 'audiēbātis', '3': 'audiēbant' }
            },
            perfect: {
                sg: { '1': 'audīvī', '2': 'audīvistī', '3': 'audīvit' },
                pl: { '1': 'audīvimus', '2': 'audīvistis', '3': 'audīvērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'audīveram', '2': 'audīverās', '3': 'audīverat' },
                pl: { '1': 'audīverāmus', '2': 'audīverātis', '3': 'audīverant' }
            },
            future1: {
                sg: { '1': 'audiam', '2': 'audiēs', '3': 'audiet' },
                pl: { '1': 'audiēmus', '2': 'audiētis', '3': 'audient' }
            }
        }
    },
    vivere: {
        infinitive: 'vivere',
        translation: 'to live',
        conjugations: {
            present: {
                sg: { '1': 'vīvō', '2': 'vīvis', '3': 'vīvit' },
                pl: { '1': 'vīvimus', '2': 'vīvitis', '3': 'vīvunt' }
            },
            imperfect: {
                sg: { '1': 'vīvēbam', '2': 'vīvēbās', '3': 'vīvēbat' },
                pl: { '1': 'vīvēbāmus', '2': 'vīvēbātis', '3': 'vīvēbant' }
            },
            perfect: {
                sg: { '1': 'vīxī', '2': 'vīxistī', '3': 'vīxit' },
                pl: { '1': 'vīximus', '2': 'vīxistis', '3': 'vīxērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'vīxeram', '2': 'vīxerās', '3': 'vīxerat' },
                pl: { '1': 'vīxerāmus', '2': 'vīxerātis', '3': 'vīxerant' }
            },
            future1: {
                sg: { '1': 'vīvam', '2': 'vīvēs', '3': 'vīvet' },
                pl: { '1': 'vīvēmus', '2': 'vīvētis', '3': 'vīvent' }
            }
        }
    },
    posse: {
        infinitive: 'posse',
        translation: 'to be able',
        conjugations: {
            present: {
                sg: { '1': 'possum', '2': 'potes', '3': 'potest' },
                pl: { '1': 'possumus', '2': 'potestis', '3': 'possunt' }
            },
            imperfect: {
                sg: { '1': 'poteram', '2': 'poterās', '3': 'poterat' },
                pl: { '1': 'poterāmus', '2': 'poterātis', '3': 'poterant' }
            },
            perfect: {
                sg: { '1': 'potuī', '2': 'potuistī', '3': 'potuit' },
                pl: { '1': 'potuimus', '2': 'potuistis', '3': 'potuērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'potueram', '2': 'potuerās', '3': 'potuerat' },
                pl: { '1': 'potuerāmus', '2': 'potuerātis', '3': 'potuerant' }
            },
            future1: {
                sg: { '1': 'poterō', '2': 'poteris', '3': 'poterit' },
                pl: { '1': 'poterimus', '2': 'poteritis', '3': 'poterunt' }
            }
        }
    },
    sentire: {
        infinitive: 'sentire',
        translation: 'to feel',
        conjugations: {
            present: {
                sg: { '1': 'sentiō', '2': 'sentīs', '3': 'sentit' },
                pl: { '1': 'sentīmus', '2': 'sentītis', '3': 'sentiunt' }
            },
            imperfect: {
                sg: { '1': 'sentiēbam', '2': 'sentiēbās', '3': 'sentiēbat' },
                pl: { '1': 'sentiēbāmus', '2': 'sentiēbātis', '3': 'sentiēbant' }
            },
            perfect: {
                sg: { '1': 'sēnsī', '2': 'sēnsistī', '3': 'sēnsit' },
                pl: { '1': 'sēnsimus', '2': 'sēnsistis', '3': 'sēnsērunt' }
            },
            plusquamperfect: {
                sg: { '1': 'sēnseram', '2': 'sēnserās', '3': 'sēnserat' },
                pl: { '1': 'sēnserāmus', '2': 'sēnserātis', '3': 'sēnserant' }
            },
            future1: {
                sg: { '1': 'sentiām', '2': 'sentiēs', '3': 'sentiet' },
                pl: { '1': 'sentiēmus', '2': 'sentiētis', '3': 'sentient' }
            }
        }
    }
};
