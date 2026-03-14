/**
 * I-Konjugation Verben (4. Konjugation)
 * Pattern: -ire endings
 */

const iVerbs = {
    audire: {
        infinitive: 'audire',
        translation: 'to hear',
        type: 'i',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'audiō', '2': 'audīs', '3': 'audit' }, pl: { '1': 'audīmus', '2': 'audītis', '3': 'audiunt' } },
                    imperfect: { sg: { '1': 'audiēbam', '2': 'audiēbās', '3': 'audiēbat' }, pl: { '1': 'audiēbāmus', '2': 'audiēbātis', '3': 'audiēbant' } },
                    perfect: { sg: { '1': 'audīvī', '2': 'audīvistī', '3': 'audīvit' }, pl: { '1': 'audīvimus', '2': 'audīvistis', '3': 'audīvērunt' } },
                    plusquamperfect: { sg: { '1': 'audīveram', '2': 'audīverās', '3': 'audīverat' }, pl: { '1': 'audīverāmus', '2': 'audīverātis', '3': 'audīverant' } },
                    future1: { sg: { '1': 'audiam', '2': 'audiēs', '3': 'audiet' }, pl: { '1': 'audiēmus', '2': 'audiētis', '3': 'audient' } }
                },
                passiv: {
                    present: { sg: { '1': 'audior', '2': 'audīris', '3': 'audītur' }, pl: { '1': 'audīmur', '2': 'audīminī', '3': 'audiuntur' } },
                    imperfect: { sg: { '1': 'audiēbar', '2': 'audiēbāris', '3': 'audiēbātur' }, pl: { '1': 'audiēbāmur', '2': 'audiēbāminī', '3': 'audiēbantur' } },
                    perfect: { sg: { '1': 'audītus sum', '2': 'audītus es', '3': 'audītus est' }, pl: { '1': 'audītī sumus', '2': 'audītī estis', '3': 'audītī sunt' } },
                    plusquamperfect: { sg: { '1': 'audītus eram', '2': 'audītus erās', '3': 'audītus erat' }, pl: { '1': 'audītī erāmus', '2': 'audītī erātis', '3': 'audītī erant' } },
                    future1: { sg: { '1': 'audiar', '2': 'audiēris', '3': 'audiētur' }, pl: { '1': 'audiēmur', '2': 'audiēminī', '3': 'audientur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'audī' }, pl: { '2': 'audīte' } } },
                passiv: { present: { sg: { '2': 'audīre' }, pl: { '2': 'audīminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'audiam', '2': 'audiās', '3': 'audiat' }, pl: { '1': 'audiāmus', '2': 'audiātis', '3': 'audiant' } },
                    imperfect: { sg: { '1': 'audīrem', '2': 'audīrēs', '3': 'audīret' }, pl: { '1': 'audīrēmus', '2': 'audīrētis', '3': 'audīrent' } },
                    perfect: { sg: { '1': 'audīverim', '2': 'audīverīs', '3': 'audīverit' }, pl: { '1': 'audīverīmus', '2': 'audīverītis', '3': 'audīverint' } },
                    plusquamperfect: { sg: { '1': 'audīvissem', '2': 'audīvissēs', '3': 'audīvisset' }, pl: { '1': 'audīvissēmus', '2': 'audīvissētis', '3': 'audīvissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'audiar', '2': 'audiāris', '3': 'audiātur' }, pl: { '1': 'audiāmur', '2': 'audiāminī', '3': 'audiantur' } },
                    imperfect: { sg: { '1': 'audīrer', '2': 'audīrēris', '3': 'audīrētur' }, pl: { '1': 'audīrēmur', '2': 'audīrēminī', '3': 'audīrentur' } },
                    perfect: { sg: { '1': 'audītus sim', '2': 'audītus sīs', '3': 'audītus sit' }, pl: { '1': 'audītī sīmus', '2': 'audītī sītis', '3': 'audītī sint' } },
                    plusquamperfect: { sg: { '1': 'audītus essem', '2': 'audītus essēs', '3': 'audītus esset' }, pl: { '1': 'audītī essēmus', '2': 'audītī essētis', '3': 'audītī essent' } }
                }
            }
        }
    },

    venire: {
        infinitive: 'venire',
        translation: 'to come',
        type: 'i',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'veniō', '2': 'venīs', '3': 'venit' }, pl: { '1': 'venīmus', '2': 'venītis', '3': 'veniunt' } },
                    imperfect: { sg: { '1': 'veniēbam', '2': 'veniēbās', '3': 'veniēbat' }, pl: { '1': 'veniēbāmus', '2': 'veniēbātis', '3': 'veniēbant' } },
                    perfect: { sg: { '1': 'vēnī', '2': 'vēnistī', '3': 'vēnit' }, pl: { '1': 'vēnimus', '2': 'vēnistis', '3': 'vēnērunt' } },
                    plusquamperfect: { sg: { '1': 'vēneram', '2': 'vēnerās', '3': 'vēnerat' }, pl: { '1': 'vēnerāmus', '2': 'vēnerātis', '3': 'vēnerant' } },
                    future1: { sg: { '1': 'veniam', '2': 'veniēs', '3': 'veniet' }, pl: { '1': 'veniēmus', '2': 'veniētis', '3': 'venient' } }
                },
                passiv: {
                    present: { sg: { '1': 'venior', '2': 'venīris', '3': 'venītur' }, pl: { '1': 'venīmur', '2': 'venīminī', '3': 'veniuntur' } },
                    imperfect: { sg: { '1': 'veniēbar', '2': 'veniēbāris', '3': 'veniēbātur' }, pl: { '1': 'veniēbāmur', '2': 'veniēbāminī', '3': 'veniēbantur' } },
                    perfect: { sg: { '1': 'ventus sum', '2': 'ventus es', '3': 'ventus est' }, pl: { '1': 'ventī sumus', '2': 'ventī estis', '3': 'ventī sunt' } },
                    plusquamperfect: { sg: { '1': 'ventus eram', '2': 'ventus erās', '3': 'ventus erat' }, pl: { '1': 'ventī erāmus', '2': 'ventī erātis', '3': 'ventī erant' } },
                    future1: { sg: { '1': 'veniar', '2': 'veniēris', '3': 'veniētur' }, pl: { '1': 'veniēmur', '2': 'veniēminī', '3': 'venientur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'venī' }, pl: { '2': 'venīte' } } },
                passiv: { present: { sg: { '2': 'venīre' }, pl: { '2': 'venīminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'veniam', '2': 'veniās', '3': 'veniat' }, pl: { '1': 'veniāmus', '2': 'veniātis', '3': 'veniant' } },
                    imperfect: { sg: { '1': 'venīrem', '2': 'venīrēs', '3': 'venīret' }, pl: { '1': 'venīrēmus', '2': 'venīrētis', '3': 'venīrent' } },
                    perfect: { sg: { '1': 'vēnerim', '2': 'vēnerīs', '3': 'vēnerit' }, pl: { '1': 'vēnerīmus', '2': 'vēnerītis', '3': 'vēnerint' } },
                    plusquamperfect: { sg: { '1': 'vēnissem', '2': 'vēnissēs', '3': 'vēnisset' }, pl: { '1': 'vēnissēmus', '2': 'vēnissētis', '3': 'vēnissent' } }
                },
                passiv: {
                    present: { sg: { '1': 'veniar', '2': 'veniāris', '3': 'veniātur' }, pl: { '1': 'veniāmur', '2': 'veniāminī', '3': 'veniantur' } },
                    imperfect: { sg: { '1': 'venīrer', '2': 'venīrēris', '3': 'venīrētur' }, pl: { '1': 'venīrēmur', '2': 'venīrēminī', '3': 'venīrentur' } },
                    perfect: { sg: { '1': 'ventus sim', '2': 'ventus sīs', '3': 'ventus sit' }, pl: { '1': 'ventī sīmus', '2': 'ventī sītis', '3': 'ventī sint' } },
                    plusquamperfect: { sg: { '1': 'ventus essem', '2': 'ventus essēs', '3': 'ventus esset' }, pl: { '1': 'ventī essēmus', '2': 'ventī essētis', '3': 'ventī essent' } }
                }
            }
        }
    },

    sentire: {
        infinitive: 'sentire',
        translation: 'to feel',
        type: 'i',
        conjugations: {
            indikativ: {
                aktiv: {
                    present: { sg: { '1': 'sentiō', '2': 'sentīs', '3': 'sentit' }, pl: { '1': 'sentīmus', '2': 'sentītis', '3': 'sentiunt' } },
                    imperfect: { sg: { '1': 'sentiēbam', '2': 'sentiēbās', '3': 'sentiēbat' }, pl: { '1': 'sentiēbāmus', '2': 'sentiēbātis', '3': 'sentiēbant' } },
                    perfect: { sg: { '1': 'sēnsī', '2': 'sēnsistī', '3': 'sēnsit' }, pl: { '1': 'sēnsimus', '2': 'sēnsistis', '3': 'sēnsērunt' } },
                    plusquamperfect: { sg: { '1': 'sēnseram', '2': 'sēnserās', '3': 'sēnserat' }, pl: { '1': 'sēnserāmus', '2': 'sēnserātis', '3': 'sēnserant' } },
                    future1: { sg: { '1': 'sentiām', '2': 'sentiēs', '3': 'sentiet' }, pl: { '1': 'sentiēmus', '2': 'sentiētis', '3': 'sentient' } }
                },
                passiv: {
                    present: { sg: { '1': 'sentior', '2': 'sentīris', '3': 'sentītur' }, pl: { '1': 'sentīmur', '2': 'sentīminī', '3': 'sentiuntur' } },
                    imperfect: { sg: { '1': 'sentiēbar', '2': 'sentiēbāris', '3': 'sentiēbātur' }, pl: { '1': 'sentiēbāmur', '2': 'sentiēbāminī', '3': 'sentiēbantur' } },
                    perfect: { sg: { '1': 'sēnsus sum', '2': 'sēnsus es', '3': 'sēnsus est' }, pl: { '1': 'sēnsī sumus', '2': 'sēnsī estis', '3': 'sēnsī sunt' } },
                    plusquamperfect: { sg: { '1': 'sēnsus eram', '2': 'sēnsus erās', '3': 'sēnsus erat' }, pl: { '1': 'sēnsī erāmus', '2': 'sēnsī erātis', '3': 'sēnsī erant' } },
                    future1: { sg: { '1': 'sentiar', '2': 'sentiēris', '3': 'sentiētur' }, pl: { '1': 'sentiēmur', '2': 'sentiēminī', '3': 'sentientur' } }
                }
            },
            imperativ: {
                aktiv: { present: { sg: { '2': 'sentī' }, pl: { '2': 'sentīte' } } },
                passiv: { present: { sg: { '2': 'sentīre' }, pl: { '2': 'sentīminī' } } }
            },
            konjunktiv: {
                aktiv: {
                    present: { sg: { '1': 'sentiam', '2': 'sentiās', '3': 'sentiat' }, pl: { '1': 'sentiāmus', '2': 'sentiātis', '3': 'sentiant' } },
                    imperfect: { sg: { '1': 'sentīrem', '2': 'sentīrēs', '3': 'sentīret' }, pl: { '1': 'sentīrēmus', '2': 'sentīrētis', '3': 'sentīrent' } },
                    perfect: { sg: { '1': 'sēnserim', '2': 'sēnserīs', '3': 'sēnserit' }, pl: { '1': 'sēnserīmus', '2': 'sēnserītis', '3': 'sēnserint' } },
                    plusquamperfect: { sg: { '1': 'sēnssem', '2': 'sēnssēs', '3': 'sēnsset' }, pl: { '1': 'sēnssēmus', '2': 'sēnssētis', '3': 'sēnssent' } }
                },
                passiv: {
                    present: { sg: { '1': 'sentiar', '2': 'sentiāris', '3': 'sentiātur' }, pl: { '1': 'sentiāmur', '2': 'sentiāminī', '3': 'sentiantur' } },
                    imperfect: { sg: { '1': 'sentīrer', '2': 'sentīrēris', '3': 'sentīrētur' }, pl: { '1': 'sentīrēmur', '2': 'sentīrēminī', '3': 'sentīrentur' } },
                    perfect: { sg: { '1': 'sēnsus sim', '2': 'sēnsus sīs', '3': 'sēnsus sit' }, pl: { '1': 'sēnsī sīmus', '2': 'sēnsī sītis', '3': 'sēnsī sint' } },
                    plusquamperfect: { sg: { '1': 'sēnsus essem', '2': 'sēnsus essēs', '3': 'sēnsus esset' }, pl: { '1': 'sēnsī essēmus', '2': 'sēnsī essētis', '3': 'sēnsī essent' } }
                }
            }
        }
    }
};
