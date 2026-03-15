/**
 * E-Konjugation Verben (2. Konjugation)
 * Pattern: -ere endings (long e)
 */

window.eVerbs = {
    habere: {
        infinitive: 'habere',
        translation: 'to have',
        type: 'e',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'habeō', '2': 'habēs', '3': 'habet' }, pl: { '1': 'habēmus', '2': 'habētis', '3': 'habent' } },
                    imperfect: { sg: { '1': 'habēbam', '2': 'habēbās', '3': 'habēbat' }, pl: { '1': 'habēbāmus', '2': 'habēbātis', '3': 'habēbant' } },
                    perfect: { sg: { '1': 'habuī', '2': 'habuistī', '3': 'habuit' }, pl: { '1': 'habuimus', '2': 'habuistis', '3': 'habuērunt' } },
                    plusquamperfect: { sg: { '1': 'habueram', '2': 'habuerās', '3': 'habuerat' }, pl: { '1': 'habuerāmus', '2': 'habuerātis', '3': 'habuerant' } },
                    future1: { sg: { '1': 'habēbō', '2': 'habēbis', '3': 'habēbit' }, pl: { '1': 'habēbimus', '2': 'habēbitis', '3': 'habēbunt' } }
                },
                passiv: {
                    present: { sg: { '1': 'habeor', '2': 'habēris', '3': 'habētur' }, pl: { '1': 'habēmur', '2': 'habēminī', '3': 'habentur' } },
                    imperfect: { sg: { '1': 'habēbar', '2': 'habēbāris', '3': 'habēbātur' }, pl: { '1': 'habēbāmur', '2': 'habēbāminī', '3': 'habēbantur' } },
                    perfect: { sg: { '1': 'habitus sum', '2': 'habitus es', '3': 'habitus est' }, pl: { '1': 'habitī sumus', '2': 'habitī estis', '3': 'habitī sunt' } },
                    plusquamperfect: { sg: { '1': 'habitus eram', '2': 'habitus erās', '3': 'habitus erat' }, pl: { '1': 'habitī erāmus', '2': 'habitī erātis', '3': 'habitī erant' } },
                    future1: { sg: { '1': 'habēbor', '2': 'habēberis', '3': 'habēbitur' }, pl: { '1': 'habēbimur', '2': 'habēbiminī', '3': 'habēbuntur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'habē' }, pl: { '2': 'habēte' } } },
                passiv: { present: { sg: { '2': 'habēre' }, pl: { '2': 'habēminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'habeam', '2': 'habeās', '3': 'habeat' }, pl: { '1': 'habeāmus', '2': 'habeātis', '3': 'habeant' } },
                    imperfect: { sg: { '1': 'habērem', '2': 'habērēs', '3': 'habēret' }, pl: { '1': 'habērēmus', '2': 'habērētis', '3': 'habērent' } },
                    perfect: { sg: { '1': 'habuerim', '2': 'habuerīs', '3': 'habuerit' }, pl: { '1': 'habuerīmus', '2': 'habuerītis', '3': 'habuerint' } },
                    plusquamperfect: { sg: { '1': 'habuissem', '2': 'habuissēs', '3': 'habuisset' }, pl: { '1': 'habuissēmus', '2': 'habuissētis', '3': 'habuissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'habear', '2': 'habēris', '3': 'habētur' }, pl: { '1': 'habēmur', '2': 'habēminī', '3': 'habeantur' } },
                    imperfect: { sg: { '1': 'habērer', '2': 'habērēris', '3': 'habērētur' }, pl: { '1': 'habērēmur', '2': 'habērēminī', '3': 'habērentur' } },
                    perfect: { sg: { '1': 'habitus sim', '2': 'habitus sīs', '3': 'habitus sit' }, pl: { '1': 'habitī sīmus', '2': 'habitī sītis', '3': 'habitī sint' } },
                    plusquamperfect: { sg: { '1': 'habitus essem', '2': 'habitus essēs', '3': 'habitus esset' }, pl: { '1': 'habitī essēmus', '2': 'habitī essētis', '3': 'habitī essent' } }
                }
            }
        }
    },

    monere: {
        infinitive: 'monere',
        translation: 'to warn/advise',
        type: 'e',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'moneō', '2': 'monēs', '3': 'monet' }, pl: { '1': 'monēmus', '2': 'monētis', '3': 'monent' } },
                    imperfect: { sg: { '1': 'monēbam', '2': 'monēbās', '3': 'monēbat' }, pl: { '1': 'monēbāmus', '2': 'monēbātis', '3': 'monēbant' } },
                    perfect: { sg: { '1': 'monuī', '2': 'monuistī', '3': 'monuit' }, pl: { '1': 'monuimus', '2': 'monuistis', '3': 'monuērunt' } },
                    plusquamperfect: { sg: { '1': 'monueram', '2': 'monuerās', '3': 'monuerat' }, pl: { '1': 'monuerāmus', '2': 'monuerātis', '3': 'monuerant' } },
                    future1: { sg: { '1': 'monēbō', '2': 'monēbis', '3': 'monēbit' }, pl: { '1': 'monēbimus', '2': 'monēbitis', '3': 'monēbunt' } }
                },
                passiv: {
                    present: { sg: { '1': 'moneor', '2': 'monēris', '3': 'monētur' }, pl: { '1': 'monēmur', '2': 'monēminī', '3': 'monentur' } },
                    imperfect: { sg: { '1': 'monēbar', '2': 'monēbāris', '3': 'monēbātur' }, pl: { '1': 'monēbāmur', '2': 'monēbāminī', '3': 'monēbantur' } },
                    perfect: { sg: { '1': 'monitus sum', '2': 'monitus es', '3': 'monitus est' }, pl: { '1': 'monitī sumus', '2': 'monitī estis', '3': 'monitī sunt' } },
                    plusquamperfect: { sg: { '1': 'monitus eram', '2': 'monitus erās', '3': 'monitus erat' }, pl: { '1': 'monitī erāmus', '2': 'monitī erātis', '3': 'monitī erant' } },
                    future1: { sg: { '1': 'monēbor', '2': 'monēberis', '3': 'monēbitur' }, pl: { '1': 'monēbimur', '2': 'monēbiminī', '3': 'monēbuntur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'monē' }, pl: { '2': 'monēte' } } },
                passiv: { present: { sg: { '2': 'monēre' }, pl: { '2': 'monēminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'moneam', '2': 'moneās', '3': 'moneat' }, pl: { '1': 'moneāmus', '2': 'moneātis', '3': 'moneant' } },
                    imperfect: { sg: { '1': 'monērem', '2': 'monērēs', '3': 'monēret' }, pl: { '1': 'monērēmus', '2': 'monērētis', '3': 'monērent' } },
                    perfect: { sg: { '1': 'monuerim', '2': 'monuerīs', '3': 'monuerit' }, pl: { '1': 'monuerīmus', '2': 'monuerītis', '3': 'monuerint' } },
                    plusquamperfect: { sg: { '1': 'monuissem', '2': 'monuissēs', '3': 'monuisset' }, pl: { '1': 'monuissēmus', '2': 'monuissētis', '3': 'monuissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'monear', '2': 'monēris', '3': 'monētur' }, pl: { '1': 'monēmur', '2': 'monēminī', '3': 'moneantur' } },
                    imperfect: { sg: { '1': 'monērer', '2': 'monērēris', '3': 'monērētur' }, pl: { '1': 'monērēmur', '2': 'monērēminī', '3': 'monērentur' } },
                    perfect: { sg: { '1': 'monitus sim', '2': 'monitus sīs', '3': 'monitus sit' }, pl: { '1': 'monitī sīmus', '2': 'monitī sītis', '3': 'monitī sint' } },
                    plusquamperfect: { sg: { '1': 'monitus essem', '2': 'monitus essēs', '3': 'monitus esset' }, pl: { '1': 'monitī essēmus', '2': 'monitī essētis', '3': 'monitī essent' } }
                }
            }
        }
    },

    videre: {
        infinitive: 'videre',
        translation: 'to see',
        type: 'e',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'videō', '2': 'vidēs', '3': 'videt' }, pl: { '1': 'vidēmus', '2': 'vidētis', '3': 'vident' } },
                    imperfect: { sg: { '1': 'vidēbam', '2': 'vidēbās', '3': 'vidēbat' }, pl: { '1': 'vidēbāmus', '2': 'vidēbātis', '3': 'vidēbant' } },
                    perfect: { sg: { '1': 'vīdī', '2': 'vīdistī', '3': 'vīdit' }, pl: { '1': 'vīdimus', '2': 'vīdistis', '3': 'vīdērunt' } },
                    plusquamperfect: { sg: { '1': 'vīderam', '2': 'vīderās', '3': 'vīderat' }, pl: { '1': 'vīderāmus', '2': 'vīderātis', '3': 'vīderant' } },
                    future1: { sg: { '1': 'vidēbō', '2': 'vidēbis', '3': 'vidēbit' }, pl: { '1': 'vidēbimus', '2': 'vidēbitis', '3': 'vidēbunt' } }
                },
                passiv: {
                    present: { sg: { '1': 'videor', '2': 'vidēris', '3': 'vidētur' }, pl: { '1': 'vidēmur', '2': 'vidēminī', '3': 'videntur' } },
                    imperfect: { sg: { '1': 'vidēbar', '2': 'vidēbāris', '3': 'vidēbātur' }, pl: { '1': 'vidēbāmur', '2': 'vidēbāminī', '3': 'vidēbantur' } },
                    perfect: { sg: { '1': 'vīsus sum', '2': 'vīsus es', '3': 'vīsus est' }, pl: { '1': 'vīsī sumus', '2': 'vīsī estis', '3': 'vīsī sunt' } },
                    plusquamperfect: { sg: { '1': 'vīsus eram', '2': 'vīsus erās', '3': 'vīsus erat' }, pl: { '1': 'vīsī erāmus', '2': 'vīsī erātis', '3': 'vīsī erant' } },
                    future1: { sg: { '1': 'vidēbor', '2': 'vidēberis', '3': 'vidēbitur' }, pl: { '1': 'vidēbimur', '2': 'vidēbiminī', '3': 'vidēbuntur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'vidē' }, pl: { '2': 'vidēte' } } },
                passiv: { present: { sg: { '2': 'vidēre' }, pl: { '2': 'vidēminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'videam', '2': 'videās', '3': 'videat' }, pl: { '1': 'videāmus', '2': 'videātis', '3': 'videant' } },
                    imperfect: { sg: { '1': 'vidērem', '2': 'vidērēs', '3': 'vidēret' }, pl: { '1': 'vidērēmus', '2': 'vidērētis', '3': 'vidērent' } },
                    perfect: { sg: { '1': 'vīderim', '2': 'vīderīs', '3': 'vīderit' }, pl: { '1': 'vīderīmus', '2': 'vīderītis', '3': 'vīderint' } },
                    plusquamperfect: { sg: { '1': 'vīdissem', '2': 'vīdissēs', '3': 'vīdisset' }, pl: { '1': 'vīdissēmus', '2': 'vīdissētis', '3': 'vīdissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'videar', '2': 'vidēris', '3': 'vidētur' }, pl: { '1': 'vidēmur', '2': 'vidēminī', '3': 'videantur' } },
                    imperfect: { sg: { '1': 'vidērer', '2': 'vidērēris', '3': 'vidērētur' }, pl: { '1': 'vidērēmur', '2': 'vidērēminī', '3': 'vidērentur' } },
                    perfect: { sg: { '1': 'vīsus sim', '2': 'vīsus sīs', '3': 'vīsus sit' }, pl: { '1': 'vīsī sīmus', '2': 'vīsī sītis', '3': 'vīsī sint' } },
                    plusquamperfect: { sg: { '1': 'vīsus essem', '2': 'vīsus essēs', '3': 'vīsus esset' }, pl: { '1': 'vīsī essēmus', '2': 'vīsī essētis', '3': 'vīsī essent' } }
                }
            }
        }
    },

    sedere: {
        infinitive: 'sedere',
        translation: 'to sit',
        type: 'e',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'sedeō', '2': 'sedēs', '3': 'sedet' }, pl: { '1': 'sedēmus', '2': 'sedētis', '3': 'sedent' } },
                    imperfect: { sg: { '1': 'sedēbam', '2': 'sedēbās', '3': 'sedēbat' }, pl: { '1': 'sedēbāmus', '2': 'sedēbātis', '3': 'sedēbant' } },
                    perfect: { sg: { '1': 'sedī', '2': 'sedistī', '3': 'sedit' }, pl: { '1': 'sedimus', '2': 'sedistis', '3': 'sedērunt' } },
                    plusquamperfect: { sg: { '1': 'sederam', '2': 'sederās', '3': 'sederat' }, pl: { '1': 'sederāmus', '2': 'sederātis', '3': 'sederant' } },
                    future1: { sg: { '1': 'sedēbō', '2': 'sedēbis', '3': 'sedēbit' }, pl: { '1': 'sedēbimus', '2': 'sedēbitis', '3': 'sedēbunt' } }
                },
                passiv: {
                    present: { sg: { '1': 'sedeor', '2': 'sedēris', '3': 'sedētur' }, pl: { '1': 'sedēmur', '2': 'sedēminī', '3': 'sedentur' } },
                    imperfect: { sg: { '1': 'sedēbar', '2': 'sedēbāris', '3': 'sedēbātur' }, pl: { '1': 'sedēbāmur', '2': 'sedēbāminī', '3': 'sedēbantur' } },
                    perfect: null,
                    plusquamperfect: null,
                    future1: null
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'sedē' }, pl: { '2': 'sedēte' } } },
                passiv: { present: { sg: { '2': 'sedēre' }, pl: { '2': 'sedēminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'sedeam', '2': 'sedeās', '3': 'sedeat' }, pl: { '1': 'sedeāmus', '2': 'sedeātis', '3': 'sedeant' } },
                    imperfect: { sg: { '1': 'sedērem', '2': 'sedērēs', '3': 'sedēret' }, pl: { '1': 'sedērēmus', '2': 'sedērētis', '3': 'sedērent' } },
                    perfect: null,
                    plusquamperfect: null
                },
                passiv: null
            }
        }
    }
};
