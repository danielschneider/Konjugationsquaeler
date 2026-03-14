/**
 * A-Konjugation Verben (1. Konjugation)
 * Pattern: -are endings
 */

const aVerbs = {
    amare: {
        infinitive: 'amare',
        translation: 'to love',
        type: 'a',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'amō', '2': 'amās', '3': 'amat' }, pl: { '1': 'amāmus', '2': 'amātis', '3': 'amant' } },
                    imperfect: { sg: { '1': 'amābam', '2': 'amābās', '3': 'amābat' }, pl: { '1': 'amābāmus', '2': 'amābātis', '3': 'amābant' } },
                    perfect: { sg: { '1': 'amāvī', '2': 'amāvistī', '3': 'amāvit' }, pl: { '1': 'amāvimus', '2': 'amāvistis', '3': 'amāvērunt' } },
                    plusquamperfect: { sg: { '1': 'amāveram', '2': 'amāverās', '3': 'amāverat' }, pl: { '1': 'amāverāmus', '2': 'amāverātis', '3': 'amāverant' } },
                    future1: { sg: { '1': 'amābō', '2': 'amābis', '3': 'amābit' }, pl: { '1': 'amābimus', '2': 'amābitis', '3': 'amābunt' } }
                },
                passiv: {
                    present: { sg: { '1': 'amor', '2': 'amāris', '3': 'amātur' }, pl: { '1': 'amāmur', '2': 'amāminī', '3': 'amantur' } },
                    imperfect: { sg: { '1': 'amābar', '2': 'amābāris', '3': 'amābātur' }, pl: { '1': 'amābāmur', '2': 'amābāminī', '3': 'amābantur' } },
                    perfect: { sg: { '1': 'amātus sum', '2': 'amātus es', '3': 'amātus est' }, pl: { '1': 'amātī sumus', '2': 'amātī estis', '3': 'amātī sunt' } },
                    plusquamperfect: { sg: { '1': 'amātus eram', '2': 'amātus erās', '3': 'amātus erat' }, pl: { '1': 'amātī erāmus', '2': 'amātī erātis', '3': 'amātī erant' } },
                    future1: { sg: { '1': 'amābor', '2': 'amāberis', '3': 'amābitur' }, pl: { '1': 'amābimur', '2': 'amābiminī', '3': 'amābuntur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'amā' }, pl: { '2': 'amāte' } } },
                passiv: { present: { sg: { '2': 'amāre' }, pl: { '2': 'amāminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'amem', '2': 'amēs', '3': 'amet' }, pl: { '1': 'amēmus', '2': 'amētis', '3': 'ament' } },
                    imperfect: { sg: { '1': 'amārem', '2': 'amārēs', '3': 'amāret' }, pl: { '1': 'amārēmus', '2': 'amārētis', '3': 'amārent' } },
                    perfect: { sg: { '1': 'amāverim', '2': 'amāverīs', '3': 'amāverit' }, pl: { '1': 'amāverīmus', '2': 'amāverītis', '3': 'amāverint' } },
                    plusquamperfect: { sg: { '1': 'amāvissem', '2': 'amāvissēs', '3': 'amāvisset' }, pl: { '1': 'amāvissēmus', '2': 'amāvissētis', '3': 'amāvissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'amer', '2': 'amēris', '3': 'amētur' }, pl: { '1': 'amēmur', '2': 'amēminī', '3': 'amentur' } },
                    imperfect: { sg: { '1': 'amārer', '2': 'amārēris', '3': 'amārētur' }, pl: { '1': 'amārēmur', '2': 'amārēminī', '3': 'amārentur' } },
                    perfect: { sg: { '1': 'amātus sim', '2': 'amātus sīs', '3': 'amātus sit' }, pl: { '1': 'amātī sīmus', '2': 'amātī sītis', '3': 'amātī sint' } },
                    plusquamperfect: { sg: { '1': 'amātus essem', '2': 'amātus essēs', '3': 'amātus esset' }, pl: { '1': 'amātī essēmus', '2': 'amātī essētis', '3': 'amātī essent' } }
                }
            }
        }
    },

    laudare: {
        infinitive: 'laudare',
        translation: 'to praise',
        type: 'a',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'laudō', '2': 'laudās', '3': 'laudat' }, pl: { '1': 'laudāmus', '2': 'laudātis', '3': 'laudant' } },
                    imperfect: { sg: { '1': 'laudābam', '2': 'laudābās', '3': 'laudābat' }, pl: { '1': 'laudābāmus', '2': 'laudābātis', '3': 'laudābant' } },
                    perfect: { sg: { '1': 'laudāvī', '2': 'laudāvistī', '3': 'laudāvit' }, pl: { '1': 'laudāvimus', '2': 'laudāvistis', '3': 'laudāvērunt' } },
                    plusquamperfect: { sg: { '1': 'laudāveram', '2': 'laudāverās', '3': 'laudāverat' }, pl: { '1': 'laudāverāmus', '2': 'laudāverātis', '3': 'laudāverant' } },
                    future1: { sg: { '1': 'laudābō', '2': 'laudābis', '3': 'laudābit' }, pl: { '1': 'laudābimus', '2': 'laudābitis', '3': 'laudābunt' } }
                },
                passiv: {
                    present: { sg: { '1': 'laudor', '2': 'laudāris', '3': 'laudātur' }, pl: { '1': 'laudāmur', '2': 'laudāminī', '3': 'laudantur' } },
                    imperfect: { sg: { '1': 'laudābar', '2': 'laudābāris', '3': 'laudābātur' }, pl: { '1': 'laudābāmur', '2': 'laudābāminī', '3': 'laudābantur' } },
                    perfect: { sg: { '1': 'laudātus sum', '2': 'laudātus es', '3': 'laudātus est' }, pl: { '1': 'laudātī sumus', '2': 'laudātī estis', '3': 'laudātī sunt' } },
                    plusquamperfect: { sg: { '1': 'laudātus eram', '2': 'laudātus erās', '3': 'laudātus erat' }, pl: { '1': 'laudātī erāmus', '2': 'laudātī erātis', '3': 'laudātī erant' } },
                    future1: { sg: { '1': 'laudābor', '2': 'laudāberis', '3': 'laudābitur' }, pl: { '1': 'laudābimur', '2': 'laudābiminī', '3': 'laudābuntur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'laudā' }, pl: { '2': 'laudāte' } } },
                passiv: { present: { sg: { '2': 'laudāre' }, pl: { '2': 'laudāminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'laudem', '2': 'laudēs', '3': 'laudet' }, pl: { '1': 'laudēmus', '2': 'laudētis', '3': 'laudent' } },
                    imperfect: { sg: { '1': 'laudārem', '2': 'laudārēs', '3': 'laudāret' }, pl: { '1': 'laudārēmus', '2': 'laudārētis', '3': 'laudārent' } },
                    perfect: { sg: { '1': 'laudāverim', '2': 'laudāverīs', '3': 'laudāverit' }, pl: { '1': 'laudāverīmus', '2': 'laudāverītis', '3': 'laudāverint' } },
                    plusquamperfect: { sg: { '1': 'laudāvissem', '2': 'laudāvissēs', '3': 'laudāvisset' }, pl: { '1': 'laudāvissēmus', '2': 'laudāvissētis', '3': 'laudāvissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'lauder', '2': 'laudēris', '3': 'laudētur' }, pl: { '1': 'laudēmur', '2': 'laudēminī', '3': 'laudentur' } },
                    imperfect: { sg: { '1': 'laudārer', '2': 'laudārēris', '3': 'laudārētur' }, pl: { '1': 'laudārēmur', '2': 'laudārēminī', '3': 'laudārentur' } },
                    perfect: { sg: { '1': 'laudātus sim', '2': 'laudātus sīs', '3': 'laudātus sit' }, pl: { '1': 'laudātī sīmus', '2': 'laudātī sītis', '3': 'laudātī sint' } },
                    plusquamperfect: { sg: { '1': 'laudātus essem', '2': 'laudātus essēs', '3': 'laudātus esset' }, pl: { '1': 'laudātī essēmus', '2': 'laudātī essētis', '3': 'laudātī essent' } }
                }
            }
        }
    },

    superare: {
        infinitive: 'superare',
        translation: 'to overcome',
        type: 'a',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'superō', '2': 'superās', '3': 'superat' }, pl: { '1': 'superāmus', '2': 'superātis', '3': 'superant' } },
                    imperfect: { sg: { '1': 'superābam', '2': 'superābās', '3': 'superābat' }, pl: { '1': 'superābāmus', '2': 'superābātis', '3': 'superābant' } },
                    perfect: { sg: { '1': 'superāvī', '2': 'superāvistī', '3': 'superāvit' }, pl: { '1': 'superāvimus', '2': 'superāvistis', '3': 'superāvērunt' } },
                    plusquamperfect: { sg: { '1': 'superāveram', '2': 'superāverās', '3': 'superāverat' }, pl: { '1': 'superāverāmus', '2': 'superāverātis', '3': 'superāverant' } },
                    future1: { sg: { '1': 'superābō', '2': 'superābis', '3': 'superābit' }, pl: { '1': 'superābimus', '2': 'superābitis', '3': 'superābunt' } }
                },
                passiv: {
                    present: { sg: { '1': 'superor', '2': 'superāris', '3': 'superātur' }, pl: { '1': 'superāmur', '2': 'superāminī', '3': 'superantur' } },
                    imperfect: { sg: { '1': 'superābar', '2': 'superābāris', '3': 'superābātur' }, pl: { '1': 'superābāmur', '2': 'superābāminī', '3': 'superābantur' } },
                    perfect: { sg: { '1': 'superātus sum', '2': 'superātus es', '3': 'superātus est' }, pl: { '1': 'superātī sumus', '2': 'superātī estis', '3': 'superātī sunt' } },
                    plusquamperfect: { sg: { '1': 'superātus eram', '2': 'superātus erās', '3': 'superātus erat' }, pl: { '1': 'superātī erāmus', '2': 'superātī erātis', '3': 'superātī erant' } },
                    future1: { sg: { '1': 'superābor', '2': 'superāberis', '3': 'superābitur' }, pl: { '1': 'superābimur', '2': 'superābiminī', '3': 'superābuntur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'superā' }, pl: { '2': 'superāte' } } },
                passiv: { present: { sg: { '2': 'superāre' }, pl: { '2': 'superāminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'superm', '2': 'superēs', '3': 'superet' }, pl: { '1': 'superēmus', '2': 'superētis', '3': 'superent' } },
                    imperfect: { sg: { '1': 'superārem', '2': 'superārēs', '3': 'superāret' }, pl: { '1': 'superārēmus', '2': 'superārētis', '3': 'superārent' } },
                    perfect: { sg: { '1': 'superāverim', '2': 'superāverīs', '3': 'superāverit' }, pl: { '1': 'superāverīmus', '2': 'superāverītis', '3': 'superāverint' } },
                    plusquamperfect: { sg: { '1': 'superāvissem', '2': 'superāvissēs', '3': 'superāvisset' }, pl: { '1': 'superāvissēmus', '2': 'superāvissētis', '3': 'superāvissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'superer', '2': 'superēris', '3': 'superētur' }, pl: { '1': 'superēmur', '2': 'superēminī', '3': 'superentur' } },
                    imperfect: { sg: { '1': 'superārer', '2': 'superārēris', '3': 'superārētur' }, pl: { '1': 'superārēmur', '2': 'superārēminī', '3': 'superārentur' } },
                    perfect: { sg: { '1': 'superātus sim', '2': 'superātus sīs', '3': 'superātus sit' }, pl: { '1': 'superātī sīmus', '2': 'superātī sītis', '3': 'superātī sint' } },
                    plusquamperfect: { sg: { '1': 'superātus essem', '2': 'superātus essēs', '3': 'superātus esset' }, pl: { '1': 'superātī essēmus', '2': 'superātī essētis', '3': 'superātī essent' } }
                }
            }
        }
    },

    appellare: {
        infinitive: 'appellare',
        translation: 'to call/name',
        type: 'a',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'appellō', '2': 'appellās', '3': 'appellat' }, pl: { '1': 'appellāmus', '2': 'appellātis', '3': 'appellant' } },
                    imperfect: { sg: { '1': 'appellābam', '2': 'appellābās', '3': 'appellābat' }, pl: { '1': 'appellābāmus', '2': 'appellābātis', '3': 'appellābant' } },
                    perfect: { sg: { '1': 'appellāvī', '2': 'appellāvistī', '3': 'appellāvit' }, pl: { '1': 'appellāvimus', '2': 'appellāvistis', '3': 'appellāvērunt' } },
                    plusquamperfect: { sg: { '1': 'appellāveram', '2': 'appellāverās', '3': 'appellāverat' }, pl: { '1': 'appellāverāmus', '2': 'appellāverātis', '3': 'appellāverant' } },
                    future1: { sg: { '1': 'appellābō', '2': 'appellābis', '3': 'appellābit' }, pl: { '1': 'appellābimus', '2': 'appellābitis', '3': 'appellābunt' } }
                },
                passiv: {
                    present: { sg: { '1': 'appellor', '2': 'appellāris', '3': 'appellātur' }, pl: { '1': 'appellāmur', '2': 'appellāminī', '3': 'appellantur' } },
                    imperfect: { sg: { '1': 'appellābar', '2': 'appellābāris', '3': 'appellābātur' }, pl: { '1': 'appellābāmur', '2': 'appellābāminī', '3': 'appellābantur' } },
                    perfect: { sg: { '1': 'appellātus sum', '2': 'appellātus es', '3': 'appellātus est' }, pl: { '1': 'appellātī sumus', '2': 'appellātī estis', '3': 'appellātī sunt' } },
                    plusquamperfect: { sg: { '1': 'appellātus eram', '2': 'appellātus erās', '3': 'appellātus erat' }, pl: { '1': 'appellātī erāmus', '2': 'appellātī erātis', '3': 'appellātī erant' } },
                    future1: { sg: { '1': 'appellābor', '2': 'appellāberis', '3': 'appellābitur' }, pl: { '1': 'appellābimur', '2': 'appellābiminī', '3': 'appellābuntur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'appellā' }, pl: { '2': 'appellāte' } } },
                passiv: { present: { sg: { '2': 'appellāre' }, pl: { '2': 'appellāminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'appellem', '2': 'appellēs', '3': 'appellet' }, pl: { '1': 'appellēmus', '2': 'appellētis', '3': 'appellent' } },
                    imperfect: { sg: { '1': 'appellārem', '2': 'appellārēs', '3': 'appellāret' }, pl: { '1': 'appellārēmus', '2': 'appellārētis', '3': 'appellārent' } },
                    perfect: { sg: { '1': 'appellāverim', '2': 'appellāverīs', '3': 'appellāverit' }, pl: { '1': 'appellāverīmus', '2': 'appellāverītis', '3': 'appellāverint' } },
                    plusquamperfect: { sg: { '1': 'appellāvissem', '2': 'appellāvissēs', '3': 'appellāvisset' }, pl: { '1': 'appellāvissēmus', '2': 'appellāvissētis', '3': 'appellāvissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'appeller', '2': 'appellēris', '3': 'appellētur' }, pl: { '1': 'appellēmur', '2': 'appellēminī', '3': 'appellentur' } },
                    imperfect: { sg: { '1': 'appellārer', '2': 'appellārēris', '3': 'appellārētur' }, pl: { '1': 'appellārēmur', '2': 'appellārēminī', '3': 'appellārentur' } },
                    perfect: { sg: { '1': 'appellātus sim', '2': 'appellātus sīs', '3': 'appellātus sit' }, pl: { '1': 'appellātī sīmus', '2': 'appellātī sītis', '3': 'appellātī sint' } },
                    plusquamperfect: { sg: { '1': 'appellātus essem', '2': 'appellātus essēs', '3': 'appellātus esset' }, pl: { '1': 'appellātī essēmus', '2': 'appellātī essētis', '3': 'appellātī essent' } }
                }
            }
        }
    },

    imperare: {
        infinitive: 'imperare',
        translation: 'to command',
        type: 'a',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'imperō', '2': 'imperās', '3': 'imperat' }, pl: { '1': 'imperāmus', '2': 'imperātis', '3': 'imperant' } },
                    imperfect: { sg: { '1': 'imperābam', '2': 'imperābās', '3': 'imperābat' }, pl: { '1': 'imperābāmus', '2': 'imperābātis', '3': 'imperābant' } },
                    perfect: { sg: { '1': 'imperāvī', '2': 'imperāvistī', '3': 'imperāvit' }, pl: { '1': 'imperāvimus', '2': 'imperāvistis', '3': 'imperāvērunt' } },
                    plusquamperfect: { sg: { '1': 'imperāveram', '2': 'imperāverās', '3': 'imperāverat' }, pl: { '1': 'imperāverāmus', '2': 'imperāverātis', '3': 'imperāverant' } },
                    future1: { sg: { '1': 'imperābō', '2': 'imperābis', '3': 'imperābit' }, pl: { '1': 'imperābimus', '2': 'imperābitis', '3': 'imperābunt' } }
                },
                passiv: {
                    present: { sg: { '1': 'imperor', '2': 'imperāris', '3': 'imperātur' }, pl: { '1': 'imperāmur', '2': 'imperāminī', '3': 'imperantur' } },
                    imperfect: { sg: { '1': 'imperābar', '2': 'imperābāris', '3': 'imperābātur' }, pl: { '1': 'imperābāmur', '2': 'imperābāminī', '3': 'imperābantur' } },
                    perfect: { sg: { '1': 'imperātus sum', '2': 'imperātus es', '3': 'imperātus est' }, pl: { '1': 'imperātī sumus', '2': 'imperātī estis', '3': 'imperātī sunt' } },
                    plusquamperfect: { sg: { '1': 'imperātus eram', '2': 'imperātus erās', '3': 'imperātus erat' }, pl: { '1': 'imperātī erāmus', '2': 'imperātī erātis', '3': 'imperātī erant' } },
                    future1: { sg: { '1': 'imperābor', '2': 'imperāberis', '3': 'imperābitur' }, pl: { '1': 'imperābimur', '2': 'imperābiminī', '3': 'imperābuntur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'imperā' }, pl: { '2': 'imperāte' } } },
                passiv: { present: { sg: { '2': 'imperāre' }, pl: { '2': 'imperāminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'imperem', '2': 'imperēs', '3': 'imperet' }, pl: { '1': 'imperēmus', '2': 'imperētis', '3': 'imperent' } },
                    imperfect: { sg: { '1': 'imperārem', '2': 'imperārēs', '3': 'imperāret' }, pl: { '1': 'imperārēmus', '2': 'imperārētis', '3': 'imperārent' } },
                    perfect: { sg: { '1': 'imperāverim', '2': 'imperāverīs', '3': 'imperāverit' }, pl: { '1': 'imperāverīmus', '2': 'imperāverītis', '3': 'imperāverint' } },
                    plusquamperfect: { sg: { '1': 'imperāvissem', '2': 'imperāvissēs', '3': 'imperāvisset' }, pl: { '1': 'imperāvissēmus', '2': 'imperāvissētis', '3': 'imperāvissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'imperer', '2': 'imperēris', '3': 'imperētur' }, pl: { '1': 'imperēmur', '2': 'imperēminī', '3': 'imperentur' } },
                    imperfect: { sg: { '1': 'imperārer', '2': 'imperārēris', '3': 'imperārētur' }, pl: { '1': 'imperārēmur', '2': 'imperārēminī', '3': 'imperārentur' } },
                    perfect: { sg: { '1': 'imperātus sim', '2': 'imperātus sīs', '3': 'imperātus sit' }, pl: { '1': 'imperātī sīmus', '2': 'imperātī sītis', '3': 'imperātī sint' } },
                    plusquamperfect: { sg: { '1': 'imperātus essem', '2': 'imperātus essēs', '3': 'imperātus esset' }, pl: { '1': 'imperātī essēmus', '2': 'imperātī essētis', '3': 'imperātī essent' } }
                }
            }
        }
    }
};
