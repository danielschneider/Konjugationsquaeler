/**
 * Unregelmäßige Verben
 * Verbs that don't follow regular conjugation patterns
 */

window.irregularVerbs = {
    // ==================== SUMMEI VERBS (esse, velle, nolle, posse) ====================
    
    esse: {
        infinitive: 'esse',
        translation: 'to be',
        type: 'irregular',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'sum', '2': 'es', '3': 'est' }, pl: { '1': 'sumus', '2': 'estis', '3': 'sunt' } },
                    imperfect: { sg: { '1': 'ēram', '2': 'ērās', '3': 'ērat' }, pl: { '1': 'ērāmus', '2': 'ērātis', '3': 'ērant' } },
                    perfect: { sg: { '1': 'fuī', '2': 'fuistī', '3': 'fuit' }, pl: { '1': 'fuimus', '2': 'fuistis', '3': 'fuērunt' } },
                    plusquamperfect: { sg: { '1': 'fueram', '2': 'fuerās', '3': 'fuerat' }, pl: { '1': 'fuerāmus', '2': 'fuerātis', '3': 'fuerant' } },
                    future1: { sg: { '1': 'erō', '2': 'eris', '3': 'erit' }, pl: { '1': 'erimus', '2': 'eritis', '3': 'erunt' } }
                },
                passiv: null
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'es' }, pl: { '2': 'este' } } },
                passiv: null
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'sim', '2': 'sīs', '3': 'sit' }, pl: { '1': 'sīmus', '2': 'sītis', '3': 'sint' } },
                    imperfect: { sg: { '1': 'essem', '2': 'essēs', '3': 'esset' }, pl: { '1': 'essēmus', '2': 'essētis', '3': 'essent' } },
                    perfect: { sg: { '1': 'fuerim', '2': 'fuerīs', '3': 'fuerit' }, pl: { '1': 'fuerīmus', '2': 'fuerītis', '3': 'fuerint' } },
                    plusquamperfect: { sg: { '1': 'fuissem', '2': 'fuissēs', '3': 'fuisset' }, pl: { '1': 'fuissēmus', '2': 'fuissētis', '3': 'fuissent' } }
                },
                passiv: null
            }
        }
    },

    velle: {
        infinitive: 'velle',
        translation: 'to want',
        type: 'irregular',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'volō', '2': 'vis', '3': 'vult' }, pl: { '1': 'volumus', '2': 'vultis', '3': 'volunt' } },
                    imperfect: { sg: { '1': 'volēbam', '2': 'volēbās', '3': 'volēbat' }, pl: { '1': 'volēbāmus', '2': 'volēbātis', '3': 'volēbant' } },
                    perfect: { sg: { '1': 'voluī', '2': 'voluistī', '3': 'voluit' }, pl: { '1': 'voluimus', '2': 'voluistis', '3': 'voluērunt' } },
                    plusquamperfect: { sg: { '1': 'volueram', '2': 'voluerās', '3': 'voluerat' }, pl: { '1': 'voluerāmus', '2': 'voluerātis', '3': 'voluerant' } },
                    future1: { sg: { '1': 'volam', '2': 'volēs', '3': 'volet' }, pl: { '1': 'volēmus', '2': 'volētis', '3': 'volent' } }
                },
                passiv: null
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'vellē' }, pl: { '2': 'vellēte' } } },
                passiv: null
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'velim', '2': 'velīs', '3': 'velit' }, pl: { '1': 'velīmus', '2': 'velītis', '3': 'velint' } },
                    imperfect: { sg: { '1': 'velllem', '2': 'velllēs', '3': 'velllet' }, pl: { '1': 'velllēmus', '2': 'velllētis', '3': 'velllent' } }
                },
                passiv: null
            }
        }
    },

    nolle: {
        infinitive: 'nolle',
        translation: 'not to want',
        type: 'irregular',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'nolō', '2': 'non vis', '3': 'non vult' }, pl: { '1': 'nolumus', '2': 'non vultis', '3': 'nolunt' } },
                    imperfect: { sg: { '1': 'nolēbam', '2': 'nolēbās', '3': 'nolēbat' }, pl: { '1': 'nolēbāmus', '2': 'nolēbātis', '3': 'nolēbant' } },
                    perfect: { sg: { '1': 'noluī', '2': 'noluistī', '3': 'noluit' }, pl: { '1': 'noluimus', '2': 'noluistis', '3': 'noluērunt' } },
                    plusquamperfect: { sg: { '1': 'nolueram', '2': 'noluerās', '3': 'noluerat' }, pl: { '1': 'noluerāmus', '2': 'noluerātis', '3': 'noluerant' } },
                    future1: { sg: { '1': 'nolam', '2': 'nolēs', '3': 'nolet' }, pl: { '1': 'nolēmus', '2': 'nolētis', '3': 'nolent' } }
                },
                passiv: null
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'nolī' }, pl: { '2': 'nolīte' } } },
                passiv: null
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'nolim', '2': 'nolīs', '3': 'nolit' }, pl: { '1': 'nolīmus', '2': 'nolītis', '3': 'nolint' } },
                    imperfect: { sg: { '1': 'nollem', '2': 'nollēs', '3': 'nollet' }, pl: { '1': 'nollēmus', '2': 'nollētis', '3': 'nollent' } }
                },
                passiv: null
            }
        }
    },

    posse: {
        infinitive: 'posse',
        translation: 'to be able',
        type: 'irregular',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'possum', '2': 'potes', '3': 'potest' }, pl: { '1': 'possumus', '2': 'potestis', '3': 'possunt' } },
                    imperfect: { sg: { '1': 'poteram', '2': 'poterās', '3': 'poterat' }, pl: { '1': 'poterāmus', '2': 'poterātis', '3': 'poterant' } },
                    perfect: { sg: { '1': 'potuī', '2': 'potuistī', '3': 'potuit' }, pl: { '1': 'potuimus', '2': 'potuistis', '3': 'potuērunt' } },
                    plusquamperfect: { sg: { '1': 'potueram', '2': 'potuerās', '3': 'potuerat' }, pl: { '1': 'potuerāmus', '2': 'potuerātis', '3': 'potuerant' } },
                    future1: { sg: { '1': 'poterō', '2': 'poteris', '3': 'poterit' }, pl: { '1': 'poterimus', '2': 'poteritis', '3': 'poterunt' } }
                },
                passiv: null
            },
            imperativ: {
                aktiv: null,
                passiv: null
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'possim', '2': 'possīs', '3': 'possit' }, pl: { '1': 'possīmus', '2': 'possītis', '3': 'possint' } },
                    imperfect: { sg: { '1': 'possem', '2': 'possēs', '3': 'possset' }, pl: { '1': 'possēmus', '2': 'possētis', '3': 'possent' } },
                    perfect: { sg: { '1': 'potuerim', '2': 'potuerīs', '3': 'potuerit' }, pl: { '1': 'potuerīmus', '2': 'potuerītis', '3': 'potuerint' } },
                    plusquamperfect: { sg: { '1': 'potuissem', '2': 'potuissēs', '3': 'potuisset' }, pl: { '1': 'potuissēmus', '2': 'potuissētis', '3': 'potuissent' } }
                },
                passiv: null
            }
        }
    },

    // ==================== Dritte Konjugation (3) ====================
    
    facere: {
        infinitive: 'facere',
        translation: 'to do/make',
        type: 'irregular',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'faciō', '2': 'facis', '3': 'facit' }, pl: { '1': 'facimus', '2': 'facitis', '3': 'faciunt' } },
                    imperfect: { sg: { '1': 'faciēbam', '2': 'faciēbās', '3': 'faciēbat' }, pl: { '1': 'faciēbāmus', '2': 'faciēbātis', '3': 'faciēbant' } },
                    perfect: { sg: { '1': 'fecī', '2': 'fecistī', '3': 'fecit' }, pl: { '1': 'fecimus', '2': 'fecistis', '3': 'fecērunt' } },
                    plusquamperfect: { sg: { '1': 'feceram', '2': 'fecerās', '3': 'fecerat' }, pl: { '1': 'fecerāmus', '2': 'fecerātis', '3': 'fecerant' } },
                    future1: { sg: { '1': 'faciam', '2': 'faciēs', '3': 'faciet' }, pl: { '1': 'faciēmus', '2': 'faciētis', '3': 'facient' } }
                },
                passiv: {
                    present: { sg: { '1': 'fior', '2': 'fieris', '3': 'fit' }, pl: { '1': 'fimur', '2': 'fimini', '3': 'fiunt' } },
                    imperfect: { sg: { '1': 'fiēbam', '2': 'fiēbās', '3': 'fiēbat' }, pl: { '1': 'fiēbāmus', '2': 'fiēbātis', '3': 'fiēbant' } },
                    perfect: { sg: { '1': 'factus sum', '2': 'factus es', '3': 'factus est' }, pl: { '1': 'factī sumus', '2': 'factī estis', '3': 'factī sunt' } },
                    plusquamperfect: { sg: { '1': 'factus eram', '2': 'factus erās', '3': 'factus erat' }, pl: { '1': 'factī erāmus', '2': 'factī erātis', '3': 'factī erant' } },
                    future1: { sg: { '1': 'fiam', '2': 'fiēs', '3': 'fiet' }, pl: { '1': 'fiēmus', '2': 'fiētis', '3': 'fient' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'fac' }, pl: { '2': 'facite' } } },
                passiv: { present: { sg: { '2': 'fierī' }, pl: { '2': 'fimini' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'faciam', '2': 'faciās', '3': 'faciat' }, pl: { '1': 'faciāmus', '2': 'faciātis', '3': 'faciant' } },
                    imperfect: { sg: { '1': 'facerem', '2': 'facerēs', '3': 'faceret' }, pl: { '1': 'facerēmus', '2': 'facerētis', '3': 'facerent' } },
                    perfect: { sg: { '1': 'fēcerim', '2': 'fēcerīs', '3': 'fēcerit' }, pl: { '1': 'fēcerīmus', '2': 'fēcerītis', '3': 'fēcerint' } },
                    plusquamperfect: { sg: { '1': 'fēcissem', '2': 'fēcissēs', '3': 'fēcisset' }, pl: { '1': 'fēcissēmus', '2': 'fēcissētis', '3': 'fēcissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'fiam', '2': 'fiās', '3': 'fiat' }, pl: { '1': 'fiāmus', '2': 'fiātis', '3': 'fiant' } },
                    imperfect: { sg: { '1': 'fierem', '2': 'fierēs', '3': 'fieret' }, pl: { '1': 'fierēmus', '2': 'fierētis', '3': 'fierent' } },
                    perfect: { sg: { '1': 'factus sim', '2': 'factus sīs', '3': 'factus sit' }, pl: { '1': 'factī sīmus', '2': 'factī sītis', '3': 'factī sint' } },
                    plusquamperfect: { sg: { '1': 'factus essem', '2': 'factus essēs', '3': 'factus esset' }, pl: { '1': 'factī essēmus', '2': 'factī essētis', '3': 'factī essent' } }
                }
            }
        }
    },

    dire: {
        infinitive: 'dire',
        translation: 'to say',
        type: 'irregular',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'dīcō', '2': 'dīcis', '3': 'dīcit' }, pl: { '1': 'dīcimus', '2': 'dīcitis', '3': 'dīcunt' } },
                    imperfect: { sg: { '1': 'dīcēbam', '2': 'dīcēbās', '3': 'dīcēbat' }, pl: { '1': 'dīcēbāmus', '2': 'dīcēbātis', '3': 'dīcēbant' } },
                    perfect: { sg: { '1': 'dīxī', '2': 'dīxistī', '3': 'dīxit' }, pl: { '1': 'dīximus', '2': 'dīxistis', '3': 'dīxērunt' } },
                    plusquamperfect: { sg: { '1': 'dīxeram', '2': 'dīxerās', '3': 'dīxerat' }, pl: { '1': 'dīxerāmus', '2': 'dīxerātis', '3': 'dīxerant' } },
                    future1: { sg: { '1': 'dīcam', '2': 'dīces', '3': 'dīcet' }, pl: { '1': 'dīcemus', '2': 'dīcetis', '3': 'dīcent' } }
                },
                passiv: {
                    present: { sg: { '1': 'dīcor', '2': 'dīceris', '3': 'dīcitur' }, pl: { '1': 'dīcimur', '2': 'dīciminī', '3': 'dīcuntur' } },
                    imperfect: { sg: { '1': 'dīcēbar', '2': 'dīcēbāris', '3': 'dīcēbātur' }, pl: { '1': 'dīcēbāmur', '2': 'dīcēbāminī', '3': 'dīcēbantur' } },
                    perfect: { sg: { '1': 'dictus sum', '2': 'dictus es', '3': 'dictus est' }, pl: { '1': 'dictī sumus', '2': 'dictī estis', '3': 'dictī sunt' } },
                    plusquamperfect: { sg: { '1': 'dictus eram', '2': 'dictus erās', '3': 'dictus erat' }, pl: { '1': 'dictī erāmus', '2': 'dictī erātis', '3': 'dictī erant' } },
                    future1: { sg: { '1': 'dīcar', '2': 'dīcēris', '3': 'dīcētur' }, pl: { '1': 'dīcēmur', '2': 'dīcēminī', '3': 'dīcentur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'dīc' }, pl: { '2': 'dīcite' } } },
                passiv: { present: { sg: { '2': 'dīcere' }, pl: { '2': 'dīciminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'dīcam', '2': 'dīcās', '3': 'dīcat' }, pl: { '1': 'dīcāmus', '2': 'dīcātis', '3': 'dīcant' } },
                    imperfect: { sg: { '1': 'dīcerem', '2': 'dīcerēs', '3': 'dīceret' }, pl: { '1': 'dīcerēmus', '2': 'dīcerētis', '3': 'dīcerent' } },
                    perfect: { sg: { '1': 'dīxerim', '2': 'dīxerīs', '3': 'dīxerit' }, pl: { '1': 'dīxerīmus', '2': 'dīxerītis', '3': 'dīxerint' } },
                    plusquamperfect: { sg: { '1': 'dīxissem', '2': 'dīxissēs', '3': 'dīxisset' }, pl: { '1': 'dīxissēmus', '2': 'dīxissētis', '3': 'dīxissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'dīcar', '2': 'dīcāris', '3': 'dīcātur' }, pl: { '1': 'dīcāmur', '2': 'dīcāminī', '3': 'dīcantur' } },
                    imperfect: { sg: { '1': 'dīcerer', '2': 'dīcerēris', '3': 'dīcerētur' }, pl: { '1': 'dīcerēmur', '2': 'dīcerēminī', '3': 'dīcerentur' } },
                    perfect: { sg: { '1': 'dictus sim', '2': 'dictus sīs', '3': 'dictus sit' }, pl: { '1': 'dictī sīmus', '2': 'dictī sītis', '3': 'dictī sint' } },
                    plusquamperfect: { sg: { '1': 'dictus essem', '2': 'dictus essēs', '3': 'dictus esset' }, pl: { '1': 'dictī essēmus', '2': 'dictī essētis', '3': 'dictī essent' } }
                }
            }
        }
    },

    credere: {
        infinitive: 'credere',
        translation: 'to believe',
        type: '3',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'credō', '2': 'credis', '3': 'credit' }, pl: { '1': 'credimus', '2': 'creditis', '3': 'credunt' } },
                    imperfect: { sg: { '1': 'credēbam', '2': 'credēbās', '3': 'credēbat' }, pl: { '1': 'credēbāmus', '2': 'credēbātis', '3': 'credēbant' } },
                    perfect: { sg: { '1': 'credidī', '2': 'credidistī', '3': 'credidit' }, pl: { '1': 'credidimus', '2': 'credidistis', '3': 'credidērunt' } },
                    plusquamperfect: { sg: { '1': 'credideram', '2': 'crediderās', '3': 'crediderat' }, pl: { '1': 'crediderāmus', '2': 'crediderātis', '3': 'crediderant' } },
                    future1: { sg: { '1': 'credām', '2': 'credēs', '3': 'credet' }, pl: { '1': 'credēmus', '2': 'credētis', '3': 'perdent' } }
                },
                passiv: {
                    present: { sg: { '1': 'credor', '2': 'crēderis', '3': 'crēditur' }, pl: { '1': 'crēdimur', '2': 'crēdiminī', '3': 'crēduntur' } },
                    imperfect: { sg: { '1': 'crēdēbar', '2': 'crēdēbāris', '3': 'crēdēbātur' }, pl: { '1': 'crēdēbāmur', '2': 'crēdēbāminī', '3': 'crēdēbantur' } },
                    perfect: { sg: { '1': 'crēditus sum', '2': 'crēditus es', '3': 'crēditus est' }, pl: { '1': 'crēditī sumus', '2': 'crēditī estis', '3': 'crēditī sunt' } },
                    plusquamperfect: { sg: { '1': 'crēditus eram', '2': 'crēditus erās', '3': 'crēditus erat' }, pl: { '1': 'crēditī erāmus', '2': 'crēditī erātis', '3': 'crēditī erant' } },
                    future1: { sg: { '1': 'crēdar', '2': 'crēdēris', '3': 'crēdētur' }, pl: { '1': 'crēdēmur', '2': 'crēdēminī', '3': 'crēdentur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'crēde' }, pl: { '2': 'crēdite' } } },
                passiv: { present: { sg: { '2': 'crēdere' }, pl: { '2': 'crēdiminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'crēdam', '2': 'crēdās', '3': 'crēdat' }, pl: { '1': 'crēdāmus', '2': 'crēdātis', '3': 'crēdant' } },
                    imperfect: { sg: { '1': 'crēderem', '2': 'crēderēs', '3': 'crēderet' }, pl: { '1': 'crēderēmus', '2': 'crēderētis', '3': 'crēderent' } },
                    perfect: { sg: { '1': 'crēdiderim', '2': 'crēdiderīs', '3': 'crēdiderit' }, pl: { '1': 'crēdiderīmus', '2': 'crēdiderītis', '3': 'crēdiderint' } },
                    plusquamperfect: { sg: { '1': 'crēdidissem', '2': 'crēdidissēs', '3': 'crēdidisset' }, pl: { '1': 'crēdidissēmus', '2': 'crēdidissētis', '3': 'crēdidissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'crēdar', '2': 'crēdāris', '3': 'crēdātur' }, pl: { '1': 'crēdāmur', '2': 'crēdāminī', '3': 'crēdantur' } },
                    imperfect: { sg: { '1': 'crēderer', '2': 'crēderēris', '3': 'crēderētur' }, pl: { '1': 'crēderēmur', '2': 'crēderēminī', '3': 'crēderentur' } },
                    perfect: { sg: { '1': 'crēditus sim', '2': 'crēditus sīs', '3': 'crēditus sit' }, pl: { '1': 'crēditī sīmus', '2': 'crēditī sītis', '3': 'crēditī sint' } },
                    plusquamperfect: { sg: { '1': 'crēditus essem', '2': 'crēditus essēs', '3': 'crēditus esset' }, pl: { '1': 'crēditī essēmus', '2': 'crēditī essētis', '3': 'crēditī essent' } }
                }
            }
        }
    },

    mittere: {
        infinitive: 'mittere',
        translation: 'to send',
        type: '3',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'mittō', '2': 'mittis', '3': 'mittit' }, pl: { '1': 'mittimus', '2': 'mittitis', '3': 'mittunt' } },
                    imperfect: { sg: { '1': 'mittēbam', '2': 'mittēbās', '3': 'mittēbat' }, pl: { '1': 'mittēbāmus', '2': 'mittēbātis', '3': 'mittēbant' } },
                    perfect: { sg: { '1': 'mīsī', '2': 'mīsistī', '3': 'mīsit' }, pl: { '1': 'mīsimus', '2': 'mīsistis', '3': 'mīsērunt' } },
                    plusquamperfect: { sg: { '1': 'mīseram', '2': 'mīserās', '3': 'mīserat' }, pl: { '1': 'mīserāmus', '2': 'mīserātis', '3': 'mīserant' } },
                    future1: { sg: { '1': 'mittam', '2': 'mittēs', '3': 'mittet' }, pl: { '1': 'mittēmus', '2': 'mittētis', '3': 'mittent' } }
                },
                passiv: {
                    present: { sg: { '1': 'mittor', '2': 'mitteris', '3': 'mittitur' }, pl: { '1': 'mittimur', '2': 'mittiminī', '3': 'mittuntur' } },
                    imperfect: { sg: { '1': 'mittēbar', '2': 'mittēbāris', '3': 'mittēbātur' }, pl: { '1': 'mittēbāmur', '2': 'mittēbāminī', '3': 'mittēbantur' } },
                    perfect: { sg: { '1': 'missus sum', '2': 'missus es', '3': 'missus est' }, pl: { '1': 'missī sumus', '2': 'missī estis', '3': 'missī sunt' } },
                    plusquamperfect: { sg: { '1': 'missus eram', '2': 'missus erās', '3': 'missus erat' }, pl: { '1': 'missī erāmus', '2': 'missī erātis', '3': 'missī erant' } },
                    future1: { sg: { '1': 'mittar', '2': 'mittēris', '3': 'mittētur' }, pl: { '1': 'mittēmur', '2': 'mittēminī', '3': 'mittentur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'mitte' }, pl: { '2': 'mittite' } } },
                passiv: { present: { sg: { '2': 'mitterе' }, pl: { '2': 'mittiminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'mittam', '2': 'mittās', '3': 'mittat' }, pl: { '1': 'mittāmus', '2': 'mittātis', '3': 'mittant' } },
                    imperfect: { sg: { '1': 'mitterem', '2': 'mitterēs', '3': 'mitteret' }, pl: { '1': 'mitterēmus', '2': 'mitterētis', '3': 'mitterent' } },
                    perfect: { sg: { '1': 'mīserim', '2': 'mīserīs', '3': 'mīserit' }, pl: { '1': 'mīserīmus', '2': 'mīserītis', '3': 'mīserint' } },
                    plusquamperfect: { sg: { '1': 'mīsissem', '2': 'mīsissēs', '3': 'mīsisset' }, pl: { '1': 'mīsissēmus', '2': 'mīsissētis', '3': 'mīsissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'mittar', '2': 'mittāris', '3': 'mittātur' }, pl: { '1': 'mittāmur', '2': 'mittāminī', '3': 'mittantur' } },
                    imperfect: { sg: { '1': 'mitterer', '2': 'mitterēris', '3': 'mitterētur' }, pl: { '1': 'mitterēmur', '2': 'mitterēminī', '3': 'mitterentur' } },
                    perfect: { sg: { '1': 'missus sim', '2': 'missus sīs', '3': 'missus sit' }, pl: { '1': 'missī sīmus', '2': 'missī sītis', '3': 'missī sint' } },
                    plusquamperfect: { sg: { '1': 'missus essem', '2': 'missus essēs', '3': 'missus esset' }, pl: { '1': 'missī essēmus', '2': 'missī essētis', '3': 'missī essent' } }
                }
            }
        }
    },

    // Weitere unregelmäßige Verben...

    iubere: {
        infinitive: 'iubere',
        translation: 'to order',
        type: 'irregular',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'iubeō', '2': 'iubēs', '3': 'iubet' }, pl: { '1': 'iubēmus', '2': 'iubētis', '3': 'iubent' } },
                    imperfect: { sg: { '1': 'iubēbam', '2': 'iubēbās', '3': 'iubēbat' }, pl: { '1': 'iubēbāmus', '2': 'iubēbātis', '3': 'iubēbant' } },
                    perfect: { sg: { '1': 'iussī', '2': 'iussistī', '3': 'iussit' }, pl: { '1': 'iussimus', '2': 'iussistis', '3': 'iussērunt' } },
                    plusquamperfect: { sg: { '1': 'iusseram', '2': 'iusserās', '3': 'iusserat' }, pl: { '1': 'iusserāmus', '2': 'iusserātis', '3': 'iusserant' } },
                    future1: { sg: { '1': 'iubēbō', '2': 'iubēbis', '3': 'iubēbit' }, pl: { '1': 'iubēbimus', '2': 'iubēbitis', '3': 'iubēbunt' } }
                },
                passiv: {
                    present: { sg: { '1': 'iubeor', '2': 'iubēris', '3': 'iubētur' }, pl: { '1': 'iubēmur', '2': 'iubēminī', '3': 'iubentur' } },
                    imperfect: { sg: { '1': 'iubēbar', '2': 'iubēbāris', '3': 'iubēbātur' }, pl: { '1': 'iubēbāmur', '2': 'iubēbāminī', '3': 'iubēbantur' } },
                    perfect: { sg: { '1': 'iussus sum', '2': 'iussus es', '3': 'iussus est' }, pl: { '1': 'iussī sumus', '2': 'iussī estis', '3': 'iussī sunt' } },
                    plusquamperfect: { sg: { '1': 'iussus eram', '2': 'iussus erās', '3': 'iussus erat' }, pl: { '1': 'iussī erāmus', '2': 'iussī erātis', '3': 'iussī erant' } },
                    future1: { sg: { '1': 'iubēbor', '2': 'iubēberis', '3': 'iubēbitur' }, pl: { '1': 'iubēbimur', '2': 'iubēbiminī', '3': 'iubēbuntur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'iubē' }, pl: { '2': 'iubēte' } } },
                passiv: { present: { sg: { '2': 'iubēre' }, pl: { '2': 'iubēminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'iubeam', '2': 'iubeās', '3': 'iubeat' }, pl: { '1': 'iubeāmus', '2': 'iubeātis', '3': 'iubeant' } },
                    imperfect: { sg: { '1': 'iubērem', '2': 'iubērēs', '3': 'iubēret' }, pl: { '1': 'iubērēmus', '2': 'iubērētis', '3': 'iubērent' } },
                    perfect: { sg: { '1': 'iusserim', '2': 'iusserīs', '3': 'iusserit' }, pl: { '1': 'iusserīmus', '2': 'iusserītis', '3': 'iusserint' } },
                    plusquamperfect: { sg: { '1': 'iussissem', '2': 'iussissēs', '3': 'iussisset' }, pl: { '1': 'iussissēmus', '2': 'iussissētis', '3': 'iussissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'iubear', '2': 'iubēris', '3': 'iubētur' }, pl: { '1': 'iubēmur', '2': 'iubēminī', '3': 'iubeantur' } },
                    imperfect: { sg: { '1': 'iubērer', '2': 'iubērēris', '3': 'iubērētur' }, pl: { '1': 'iubērēmur', '2': 'iubērēminī', '3': 'iubērentur' } },
                    perfect: { sg: { '1': 'iussus sim', '2': 'iussus sīs', '3': 'iussus sit' }, pl: { '1': 'iussī sīmus', '2': 'iussī sītis', '3': 'iussī sint' } },
                    plusquamperfect: { sg: { '1': 'iussus essem', '2': 'iussus essēs', '3': 'iussus esset' }, pl: { '1': 'iussī essēmus', '2': 'iussī essētis', '3': 'iussī essent' } }
                }
            }
        }
    },

    aperire: {
        infinitive: 'aperire',
        translation: 'to open',
        type: 'irregular',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'aperiō', '2': 'aperis', '3': 'aperit' }, pl: { '1': 'aperimus', '2': 'aperitis', '3': 'aperiunt' } },
                    imperfect: { sg: { '1': 'aperiēbam', '2': 'aperiēbās', '3': 'aperiēbat' }, pl: { '1': 'aperiēbāmus', '2': 'aperiēbātis', '3': 'aperiēbant' } },
                    perfect: { sg: { '1': 'aperuī', '2': 'aperuistī', '3': 'aperuit' }, pl: { '1': 'aperuimus', '2': 'aperuistis', '3': 'aperuērunt' } },
                    plusquamperfect: { sg: { '1': 'aperueram', '2': 'aperuerās', '3': 'aperuerat' }, pl: { '1': 'aperuerāmus', '2': 'aperuerātis', '3': 'aperuerant' } },
                    future1: { sg: { '1': 'aperiam', '2': 'aperiēs', '3': 'aperiet' }, pl: { '1': 'aperiēmus', '2': 'aperiētis', '3': 'aperient' } }
                },
                passiv: {
                    present: { sg: { '1': 'aperior', '2': 'aperīris', '3': 'aperītur' }, pl: { '1': 'aperīmur', '2': 'aperīminī', '3': 'aperiuntur' } },
                    imperfect: { sg: { '1': 'aperiēbar', '2': 'aperiēbāris', '3': 'aperiēbātur' }, pl: { '1': 'aperiēbāmur', '2': 'aperiēbāminī', '3': 'aperiēbantur' } },
                    perfect: null,
                    plusquamperfect: null,
                    future1: null
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'aperī' }, pl: { '2': 'aperīte' } } },
                passiv: null
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'aperiam', '2': 'aperiās', '3': 'aperiat' }, pl: { '1': 'aperiāmus', '2': 'aperiātis', '3': 'aperiant' } },
                    imperfect: { sg: { '1': 'aperīrem', '2': 'aperīrēs', '3': 'aperīret' }, pl: { '1': 'aperīrēmus', '2': 'aperīrētis', '3': 'aperīrent' } }
                },
                passiv: null
            }
        }
    },

    interficere: {
        infinitive: 'interficere',
        translation: 'to kill',
        type: 'irregular',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'interficiō', '2': 'interficis', '3': 'interficit' }, pl: { '1': 'interficimus', '2': 'interficitis', '3': 'interficiunt' } },
                    imperfect: { sg: { '1': 'interficiēbam', '2': 'interficiēbās', '3': 'interficiēbat' }, pl: { '1': 'interficiēbāmus', '2': 'interficiēbātis', '3': 'interficiēbant' } },
                    perfect: { sg: { '1': 'interfēcī', '2': 'interfecistī', '3': 'interfēcit' }, pl: { '1': 'interfēcimus', '2': 'interfēcistis', '3': 'interfēcērunt' } },
                    plusquamperfect: { sg: { '1': 'interfēceram', '2': 'interfēcerās', '3': 'interfēcerat' }, pl: { '1': 'interfēcerāmus', '2': 'interfēcerātis', '3': 'interfēcerant' } },
                    future1: { sg: { '1': 'interficiam', '2': 'interficiēs', '3': 'interficiet' }, pl: { '1': 'interficiēmus', '2': 'interficiētis', '3': 'interficient' } }
                },
                passiv: {
                    present: { sg: { '1': 'interficior', '2': 'interficeris', '3': 'interficitur' }, pl: { '1': 'interficimur', '2': 'interficiminī', '3': 'interficiuntur' } },
                    imperfect: { sg: { '1': 'interficiēbar', '2': 'interficiēbāris', '3': 'interficiēbātur' }, pl: { '1': 'interficiēbāmur', '2': 'interficiēbāminī', '3': 'interficiēbantur' } },
                    perfect: { sg: { '1': 'interfectus sum', '2': 'interfectus es', '3': 'interfectus est' }, pl: { '1': 'interfectī sumus', '2': 'interfectī estis', '3': 'interfectī sunt' } },
                    plusquamperfect: { sg: { '1': 'interfectus eram', '2': 'interfectus erās', '3': 'interfectus erat' }, pl: { '1': 'interfectī erāmus', '2': 'interfectī erātis', '3': 'interfectī erant' } },
                    future1: { sg: { '1': 'interficiar', '2': 'interficiēris', '3': 'interficiētur' }, pl: { '1': 'interficiēmur', '2': 'interficiēminī', '3': 'interficientur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'interfic' }, pl: { '2': 'interficite' } } },
                passiv: { present: { sg: { '2': 'interficere' }, pl: { '2': 'interficiminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'interficiam', '2': 'interficiās', '3': 'interficiat' }, pl: { '1': 'interficiāmus', '2': 'interficiātis', '3': 'interficiant' } },
                    imperfect: { sg: { '1': 'interficerem', '2': 'interficerēs', '3': 'interficeret' }, pl: { '1': 'interficerēmus', '2': 'interficerētis', '3': 'interficerent' } },
                    perfect: { sg: { '1': 'interfēcerim', '2': 'interfēcerīs', '3': 'interfēcerit' }, pl: { '1': 'interfēcerīmus', '2': 'interfēcerītis', '3': 'interfēcerint' } },
                    plusquamperfect: { sg: { '1': 'interfēcissem', '2': 'interfēcissēs', '3': 'interfēcisset' }, pl: { '1': 'interfēcissēmus', '2': 'interfēcissētis', '3': 'interfēcissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'interficiar', '2': 'interficiāris', '3': 'interficiātur' }, pl: { '1': 'interficiāmur', '2': 'interficiāminī', '3': 'interficiantur' } },
                    imperfect: { sg: { '1': 'interficerer', '2': 'interficerēris', '3': 'interficerētur' }, pl: { '1': 'interficerēmur', '2': 'interficerēminī', '3': 'interficerentur' } },
                    perfect: { sg: { '1': 'interfectus sim', '2': 'interfectus sīs', '3': 'interfectus sit' }, pl: { '1': 'interfectī sīmus', '2': 'interfectī sītis', '3': 'interfectī sint' } },
                    plusquamperfect: { sg: { '1': 'interfectus essem', '2': 'interfectus essēs', '3': 'interfectus esset' }, pl: { '1': 'interfectī essēmus', '2': 'interfectī essētis', '3': 'interfectī essent' } }
                }
            }
        }
    },

    vivere: {
        infinitive: 'vivere',
        translation: 'to live',
        type: '3',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'vīvō', '2': 'vīvis', '3': 'vīvit' }, pl: { '1': 'vīvimus', '2': 'vīvitis', '3': 'vīvunt' } },
                    imperfect: { sg: { '1': 'vīvēbam', '2': 'vīvēbās', '3': 'vīvēbat' }, pl: { '1': 'vīvēbāmus', '2': 'vīvēbātis', '3': 'vīvēbant' } },
                    perfect: { sg: { '1': 'vīxī', '2': 'vīxistī', '3': 'vīxit' }, pl: { '1': 'vīximus', '2': 'vīxistis', '3': 'vīxērunt' } },
                    plusquamperfect: { sg: { '1': 'vīxeram', '2': 'vīxerās', '3': 'vīxerat' }, pl: { '1': 'vīxerāmus', '2': 'vīxerātis', '3': 'vīxerant' } },
                    future1: { sg: { '1': 'vīvam', '2': 'vīvēs', '3': 'vīvet' }, pl: { '1': 'vīvēmus', '2': 'vīvētis', '3': 'vīvent' } }
                },
                passiv: null
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'vīve' }, pl: { '2': 'vīvite' } } },
                passiv: null
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'vīvam', '2': 'vīvās', '3': 'vīvat' }, pl: { '1': 'vīvāmus', '2': 'vīvātis', '3': 'vīvant' } },
                    imperfect: { sg: { '1': 'vīverem', '2': 'vīverēs', '3': 'vīveret' }, pl: { '1': 'vīverēmus', '2': 'vīverētis', '3': 'vīverent' } },
                    perfect: { sg: { '1': 'vīxerim', '2': 'vīxerīs', '3': 'vīxerit' }, pl: { '1': 'vīxerīmus', '2': 'vīxerītis', '3': 'vīxerint' } },
                    plusquamperfect: { sg: { '1': 'vīxissem', '2': 'vīxissēs', '3': 'vīxisset' }, pl: { '1': 'vīxissēmus', '2': 'vīxissētis', '3': 'vīxissent' } }
                },
                passiv: null
            }
        }
    },

    occurrere: {
        infinitive: 'occurrere',
        translation: 'to encounter',
        type: '3',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'occurrō', '2': 'occurris', '3': 'occurrit' }, pl: { '1': 'occurrimus', '2': 'occurritis', '3': 'occurrunt' } },
                    imperfect: { sg: { '1': 'occurrēbam', '2': 'occurrēbās', '3': 'occurrēbat' }, pl: { '1': 'occurrēbāmus', '2': 'occurrēbātis', '3': 'occurrēbant' } },
                    perfect: { sg: { '1': 'occurrī', '2': 'occurristī', '3': 'occurrit' }, pl: { '1': 'occurrimus', '2': 'occurristis', '3': 'ocurrērunt' } },
                    plusquamperfect: { sg: { '1': 'occurreram', '2': 'occurrerās', '3': 'occurrerat' }, pl: { '1': 'occurrerāmus', '2': 'occurrerātis', '3': 'occurrerant' } },
                    future1: { sg: { '1': 'occurram', '2': 'occurrēs', '3': 'occurret' }, pl: { '1': 'occurrēmus', '2': 'occurrētis', '3': 'occurrent' } }
                },
                passiv: {
                    present: { sg: { '1': 'occurror', '2': 'occurreris', '3': 'occurritur' }, pl: { '1': 'occurrimur', '2': 'occurriminī', '3': 'occurruntur' } },
                    imperfect: { sg: { '1': 'occurrēbar', '2': 'occurrēbāris', '3': 'occurrēbātur' }, pl: { '1': 'occurrēbāmur', '2': 'occurrēbāminī', '3': 'occurrēbantur' } },
                    perfect: null,
                    plusquamperfect: null,
                    future1: null
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'occurrе' }, pl: { '2': 'occurrite' } } },
                passiv: null
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'occurram', '2': 'occurrās', '3': 'occurrat' }, pl: { '1': 'occurrāmus', '2': 'occurrātis', '3': 'occurrant' } },
                    imperfect: { sg: { '1': 'occurrerem', '2': 'occurrerēs', '3': 'occurreret' }, pl: { '1': 'occurrerēmus', '2': 'occurrerētis', '3': 'occurrent' } }
                },
                passiv: null
            }
        }
    },

    relinquere: {
        infinitive: 'relinquere',
        translation: 'to leave/abandon',
        type: '3',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'relinquō', '2': 'relinquis', '3': 'relinquit' }, pl: { '1': 'relinquimus', '2': 'relinquitis', '3': 'relinquunt' } },
                    imperfect: { sg: { '1': 'relinquēbam', '2': 'relinquēbās', '3': 'relinquēbat' }, pl: { '1': 'relinquēbāmus', '2': 'relinquēbātis', '3': 'relinquēbant' } },
                    perfect: { sg: { '1': 'relīquī', '2': 'relīquistī', '3': 'relīquit' }, pl: { '1': 'relīquimus', '2': 'relīquistis', '3': 'relīquērunt' } },
                    plusquamperfect: { sg: { '1': 'relīqueram', '2': 'relīquerās', '3': 'relīquerat' }, pl: { '1': 'relīquerāmus', '2': 'relīquerātis', '3': 'relīquerant' } },
                    future1: { sg: { '1': 'relinquam', '2': 'relinquēs', '3': 'relinquet' }, pl: { '1': 'relinquēmus', '2': 'relinquētis', '3': 'relinquent' } }
                },
                passiv: {
                    present: { sg: { '1': 'relinquor', '2': 'relinqueris', '3': 'relinquitur' }, pl: { '1': 'relinquimur', '2': 'relinquiminī', '3': 'relinquuntur' } },
                    imperfect: { sg: { '1': 'relinquēbar', '2': 'relinquēbāris', '3': 'relinquēbātur' }, pl: { '1': 'relinquēbāmur', '2': 'relinquēbāminī', '3': 'relinquēbantur' } },
                    perfect: null,
                    plusquamperfect: null,
                    future1: null
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'relinquе' }, pl: { '2': 'relinquite' } } },
                passiv: null
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'relinquam', '2': 'relinquās', '3': 'relinquat' }, pl: { '1': 'relinquāmus', '2': 'relinquātis', '3': 'relinquant' } },
                    imperfect: { sg: { '1': 'relinquerem', '2': 'relinquerēs', '3': 'relinqueret' }, pl: { '1': 'relinquerēmus', '2': 'relinquerētis', '3': 'relinquerent' } }
                },
                passiv: null
            }
        }
    },

    perdere: {
        infinitive: 'perdere',
        translation: 'to lose/destroy',
        type: '3',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'perdō', '2': 'perdis', '3': 'perdit' }, pl: { '1': 'perdimus', '2': 'perditis', '3': 'perdunt' } },
                    imperfect: { sg: { '1': 'perdēbam', '2': 'perdēbās', '3': 'perdēbat' }, pl: { '1': 'perdēbāmus', '2': 'perdēbātis', '3': 'perdēbant' } },
                    perfect: { sg: { '1': 'perdidī', '2': 'perdidistī', '3': 'perdidit' }, pl: { '1': 'perdidimus', '2': 'perdidistis', '3': 'perdidērunt' } },
                    plusquamperfect: { sg: { '1': 'perdideram', '2': 'perdiderās', '3': 'perdiderat' }, pl: { '1': 'perdiderāmus', '2': 'perdiderātis', '3': 'perdiderant' } },
                    future1: { sg: { '1': 'perdām', '2': 'perdēs', '3': 'perdet' }, pl: { '1': 'perdēmus', '2': 'perdētis', '3': 'perdent' } }
                },
                passiv: {
                    present: { sg: { '1': 'perdor', '2': 'perderis', '3': 'perditur' }, pl: { '1': 'perdimur', '2': 'perdiminī', '3': 'perduntur' } },
                    imperfect: { sg: { '1': 'perdēbar', '2': 'perdēbāris', '3': 'perdēbātur' }, pl: { '1': 'perdēbāmur', '2': 'perdēbāminī', '3': 'perdēbantur' } },
                    perfect: null,
                    plusquamperfect: null,
                    future1: null
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'perde' }, pl: { '2': 'perditte' } } },
                passiv: null
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'perdam', '2': 'perdās', '3': 'perdat' }, pl: { '1': 'perdāmus', '2': 'perdātis', '3': 'perdent' } },
                    imperfect: { sg: { '1': 'perderem', '2': 'perderēs', '3': 'perderet' }, pl: { '1': 'perderēmus', '2': 'perderētis', '3': 'perderent' } }
                },
                passiv: null
            }
        }
    }
};
