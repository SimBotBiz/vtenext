/*************************************
 * SPDX-FileCopyrightText: 2009-2020 Vtenext S.r.l. <info@vtenext.com> 
  * SPDX-License-Identifier: AGPL-3.0-only  
 ************************************/

var alert_arr = {
	DELETE:'Sicuro di voler cancellare il selezionato ',
	RECORDS:' record?',
	SELECT:"Prego selezionare almeno un'entità",
	DELETE_RECORD: 'Sicuro di voler cancellare il record selezionato?',
	DELETE_RECORDS: 'Sicuro di voler cancellare i %s record selezionati?',
	DELETE_ACCOUNT:"Cancellando questa azienda verranno cancellate anche le opportunità e i preventivi associati. Sicuro di voler eliminarla?",
	DELETE_ACCOUNTS:'Cancellando queste aziende verranno cancellate anche le opportunità e i preventivi associati. Sicuro di voler eliminarla?',
	DELETE_VENDOR:"Cancellando questa azienda verranno cancellate anche le opportunità e i preventivi associati. Sicuro di voler eliminarla?",
	DELETE_VENDORS:'Cancellado questi fornitori verranno rimossi anche gli ordini di acquisto correlati. Sicuro di voler eliminarli?',
	SELECT_MAILID:'Prego selezionare un identificativo di email valido',
	//crmv@13847
	OVERWRITE_EXISTING_ACCOUNT1:"Sovrascrivere l'indirizzo esistente con l'indirizzo dell'Azienda (",
	OVERWRITE_EXISTING_ACCOUNT2:') selezionato/a? \nCliccando Annulla l\'elemento verrà comunque legato mantenedo indipendenti gli indirizzi.',
	//crmv@13847e
	MISSING_FIELDS:'Numero di campi non specificato:',
	NOT_ALLOWED_TO_EDIT:'non hai i privilegi per modificare questo campo',
	NOT_ALLOWED_TO_EDIT_FIELDS:'non hai i privilegi per modificare questi campi',
	COLUMNS_CANNOT_BE_EMPTY:'Le colonne selezionate non possono essere vuote',
	CANNOT_BE_EMPTY:"%s non può essere vuoto",
	CANNOT_BE_NONE:"%s non può essere nullo",
	ENTER_VALID:'Prego inserire un valido ',
	SHOULDBE_LESS:' deve essere minore di ',
	SHOULDBE_LESS_EQUAL:' deve essere minore o uguale a ',
	SHOULDBE_EQUAL:' deve essere uguale a ',
	SHOULDBE_GREATER:' deve essere maggiore di ',
	SHOULDBE_GREATER_EQUAL:' deve essere maggiore o uguale a ',
	SHOULDNOTBE_EQUAL:' non deve essere uguale a ',
	SHOULDBE_LESS_1: '%s deve essere minore di %d',
	SHOULDBE_LESS_EQUAL_1: '%s deve essere minore o uguale a %d',
	SHOULDBE_EQUAL_1: '%s deve essere uguale a %d',
	SHOULDBE_GREATER_1: '%s deve essere maggiore di %d',
	SHOULDBE_GREATER_EQUAL_1: '%s deve essere maggiore o uguale a %d',
	SHOULDNOTBE_EQUAL_1: '%s non deve essere uguale a %d',
	DATE_SHOULDBE_LESS: '%s deve essere minore di %s',
	DATE_SHOULDBE_LESS_EQUAL: '%s deve essere minore o uguale a %s',
	DATE_SHOULDBE_EQUAL: '%s deve essere uguale a %s',
	DATE_SHOULDBE_GREATER: '%s deve essere maggiore di %s',
	DATE_SHOULDBE_GREATER_EQUAL: '%s deve essere maggiore o uguale a %s',
	DATE_SHOULDNOTBE_EQUAL: '%s non deve essere uguale a %s',
	LENGTH_SHOULDBE_LESS: '%s %s deve essere minore di %d %s',
	LENGTH_SHOULDBE_LESS_EQUAL: '%s %s deve essere minore o uguale a %d %s',
	LENGTH_SHOULDBE_EQUAL: '%s %s deve essere uguale a %d %s',
	LENGTH_SHOULDBE_GREATER: '%s %s deve essere maggiore di %d %s',
	LENGTH_SHOULDBE_GREATER_EQUAL: '%s %s deve essere maggiore o uguale a %d %s',
	LENGTH_SHOULDNOTBE_EQUAL: '%s %s non deve essere uguale a %d %s',
	INVALID:'Non valido ',
	EXCEEDS_MAX:' esce dai limiti massimi ',
	OUT_OF_RANGE:' fuori dai limiti massimi ',
	PORTAL_PROVIDE_EMAILID:"L'utente del portale deve specificare un identificativo di email per entrare",
	ADD_CONFIRMATION:'Sicuro di voler aggiungere ',
	ACCOUNTNAME_CANNOT_EMPTY:"Nome Azienda non può essere vuoto",
	CANT_SELECT_CONTACTS:"Non è possibile selezionare il contatto correlato dal Lead",
	LBL_THIS:'Questo ',
	DOESNOT_HAVE_MAILIDS:" non ha alcun identificativo di email",
	ARE_YOU_SURE:'Sicuro?',
	DOESNOT_HAVE_AN_MAILID:'" '+"non ha alcun identificativo di email",
	MISSING_REQUIRED_FIELDS:'Mancano dei campi obbligatori: ',
	READONLY:"è in sola lettura",
	SELECT_ATLEAST_ONE_USER:'Prego, selezionare almeno un utente',
	DISABLE_SHARING_CONFIRMATION:'Sicuro di voler disabilitare le condivisioni selezionate ',
	USERS:' utente(i) ?',
	ENDTIME_GREATER_THAN_STARTTIME:'Data fine deve essere maggiore di data inizio ',
	FOLLOWUPTIME_GREATER_THAN_STARTTIME:'Ora di Followup deve essere maggiore della data inizio ',
	MISSING_EVENT_NAME:"Omesso il nome dell'evento",
	EVENT_TYPE_NOT_SELECTED:"Non e' stato scelto il tipo di evento",
	OPPORTUNITYNAME_CANNOT_BE_EMPTY:"Il nome dell'opportunità non può essere vuoto",
	CLOSEDATE_CANNOT_BE_EMPTY:"Data di chiusura non può essere vuota",
	SITEURL_CANNOT_BE_EMPTY:"L'URL del sito non può essere vuoto",
	SITENAME_CANNOT_BE_EMPTY:"Il nome del sito non può essere vuoto",
	LISTPRICE_CANNOT_BE_EMPTY:"Il prezzo di listino non può essere vuoto",
	INVALID_LIST_PRICE:'Prezzo di listino non valido',
	PROBLEM_ACCESSSING_URL:"Problemi di accesso all'URL: ",
	CODE:' Codice: ',
	WISH_TO_QUALIFY_MAIL_AS_CONTACT:'Sicuro di voler qualificare questa email come contatto?',
	SELECT_ATLEAST_ONEMSG_TO_DEL:'Prego, selezionare almeno un messaggio da rimuover',
	ERROR:'Errore',
	FIELD_TYPE_NOT_SELECTED:'Tipo di campo non selezionato',
	SPECIAL_CHARACTERS_NOT_ALLOWED:'I caratteri speciali non sono ammessi nella label del campo',
	PICKLIST_CANNOT_BE_EMPTY:"Il valore della picklist non può essere vuoto",
	DUPLICATE_VALUES_FOUND:'Valore duplicato non trovato',
	DUPLICATE_MAPPING_ACCOUNTS:'Mappatura duplicati per le Aziende!',
	DUPLICATE_MAPPING_CONTACTS:'Mappatura dei duplicati per i Contatti!',
	DUPLICATE_MAPPING_POTENTIAL:"Mappatura dei duplicati per le Opportunità!",
	ERROR_WHILE_EDITING:'Errore in modifica',
	CURRENCY_CHANGE_INFO:"Il cambio di valuta è avvenuto con successo",
	CURRENCY_CONVERSION_INFO:'Sicuro di voler usare il dollaro $ come valuta? \n Premi su OK per rimanere nel $, Annulla per cambiare il tasso di cambio.',
	THE_EMAILID: "L'identificativo di email '",
	EMAIL_FIELD_INVALID:"' nel campo email non è valido.",
	MISSING_REPORT_NAME:'Nome report non specificato',
	REPORT_NAME_EXISTS:"Nome report già esistente, prova ancora...",
	WANT_TO_CHANGE_CONTACT_ADDR:'Vuoi modificare gli indirizzi del contatto collegato a questa Azienda?',
	SURE_TO_DELETE:'Sicuro di voler eliminare ?',
	NO_PRODUCT_SELECTED:'Nessun prodotto selezionato. Selezionare almeno un prodotto',
	VALID_FINAL_PERCENT:'Inserire un valore valido per la percentuale di sconto',
	VALID_FINAL_AMOUNT:"Inserire un valore valido per l'ammontare dello sconto",
	VALID_SHIPPING_CHARGE:'Inserire un valore valido per le spese di spedizione',
	VALID_ADJUSTMENT:"Inserire un valore valido per l'arrotondamento",
	WANT_TO_CONTINUE:'Vuoi procedere?',
	ENTER_VALID_TAX:'Prego inserire un valore valido per le tasse',
	VALID_TAX_NAME:'Prego inserire un nome tassa valido',
	CORRECT_TAX_VALUE:'Prego inserire un valore corretto per la tassa',
	ENTER_POSITIVE_VALUE:'Prego inserire un valore positivo',
	LABEL_SHOULDNOT_EMPTY:"La label della tassa non può essere vuota",
	NOT_VALID_ENTRY:"non è un valore valido. Prego inserirne un valido",
	VALID_DISCOUNT_PERCENT:'Prego inserire un valore valido per la percentuale di sconto',
	VALID_DISCOUNT_AMOUNT:"Prego inserire un valore valido per l'ammontare dello sconto",
	SELECT_TEMPLATE_TO_MERGE:'Prego selezionare un template per il merge',
	SELECTED_MORE_THAN_ONCE:"Hai selezionato i seguenti prodotti più di una volta.",
	YES:'si',
	NO:'no',
	MAIL:'mail',
	EQUALS:'uguale',
	NOT_EQUALS_TO:'diverso',
	STARTS_WITH:'inizia per',
	CONTAINS:'contiene',
	DOES_NOT_CONTAINS:'non contiene',
	LESS_THAN:'minore di',
	GREATER_THAN:'maggiore di',
	LESS_OR_EQUALS:'minore o uguale',
	GREATER_OR_EQUALS:'maggiore o uguale',
	NO_SPECIAL_CHARS:'I caratteri speciali non sono amessi nella stringa di fattura',
	SHARED_EVENT_DEL_MSG:"L'utente non ha il permesso di cancellare il record",
	PLS_SELECT_VALID_FILE:'Prego selezionare un file con una delle seguenti estensioni:\n',
	NO_SPECIAL:'caratteri speciali non sono ammessi',
	NO_QUOTES:'Apostrofi (\'), virgolette (") ed il simbolo di somma (+) non sono consentiti ',
	IN_PROFILENAME:' nel nome del profilo',
	IN_GROUPNAME:' nel nome del gruppo',
	IN_ROLENAME:' nel nome del ruolo',
	VALID_TAX_PERCENT:'Prego inserire un valore valido per la percentuale delle tasse',
	VALID_SH_TAX:'Prego inserire un valore valido per le tasse di spedizione ',
	ROLE_DRAG_ERR_MSG:"Non è consentito cancellare un ruolo superiore da uno inferiore",
	LBL_DEL:'Canc',
	VALID_DATA :' Prego inserire un dato valido... ',
	STDFILTER : 'Filri standard',
	STARTDATE : 'Data inzio',
	ENDDATE : 'Data fine',
	START_DATE_TIME : 'Data e orario inizio',
	START_TIME : 'Orario inizio',
	DATE_SHOULDNOT_PAST :"Data e orario corrente per le attività pianificate",
	TIME_SHOULDNOT_PAST :"Ora corrente per le attivitàpianificate",
	LBL_AND : 'E',
	LBL_ENTER_VALID_PORT: 'Prego inserire un numero di porta valido',
	IN_USERNAME :' nel Nome Utente ',
	LBL_ENTER_VALID_NO: 'Prego inseire un numero valido',
	LBL_PROVIDE_YES_NO: ' Valore non valido.\n Prego inserire Yes o No',
	LBL_SELECT_CRITERIA: ' Criterio non valido.\n Prego selezionare un criterio',
	LBL_WRONG_IMAGE_TYPE: 'Tipo di file immagine per i contatti - jpeg, png, jpg, pjpeg, x-png or gif',
	SELECT_MAIL_MOVE: 'Prego scegli una mail e poi sposta..',
	LBL_NOTSEARCH_WITHSEARCH_ALL: 'Non hai utilizzato la funzione di ricerca. Tutti i record verranno esportati in',
	LBL_NOTSEARCH_WITHSEARCH_CURRENTPAGE: 'Non hai utilizzato la funzione di ricerca. Ma hai selezionato l\'opzione ricerca&pagina corrente, per cui i record della pagina corrente verranno esportati in ',
	LBL_NO_DATA_SELECTED: 'Nessun record selezionato. Seleziona almeno un record da esportare.',
	LBL_SEARCH_WITHOUTSEARCH_ALL: 'Hai usato l\'opzione di ricerca ma non hai selezionato nè l\'opzione senza nè l\'opzione tutti.\n Clicca [ok] per esportare tutti i dati o clicca [cancel] e riprova con altri criteri di esportazione.',
	STOCK_IS_NOT_ENOUGH : 'Lo Stock in magazzino non è sufficiente',
	INVALID_QTY : 'Quantità non valida',
	LBL_SEARCH_WITHOUTSEARCH_CURRENTPAGE: 'Hai utilizzato la funzione di ricerca, ma non hai selezionato l\'opzione senza ricerca&pagina corrente.\n  Clicca [ok] per esportare tutti i dati o\n clicca [cancel] e riprova con altri criteri di esportazione.',
	LBL_SEARCH_WITHOUTSEARCH_ALL:'Hai utilizzato l\'opzione di ricerca ma non hai selezionato senza ricerca e tutte le opzioni.\n Clicca [ok] per esportare tutti i dati o\n clicca [cancel] e riprova con altri criteri di esportazione',
	LBL_SEARCH_WITHOUTSEARCH_CURRENTPAGE:'Hai utilizzato l\'opzione di ricerca ma non hai selezionato senza ricerca e le opzioni per la pagina corrente.\n Clicca [ok] per esportare i dati della pagina corrente o\n clicca [cancel] e riprova con altri criteri di esportazione.',
	LBL_SELECT_COLUMN: 'Colonna non valida.\n Prego seleziona una colonna valida',
	LBL_NOT_ACCESSIBLE : 'Non Accessibile',
	LBL_FILENAME_LENGTH_EXCEED_ERR: 'Il nome del file non può superare i 255 caratteri di lunghezza',
	LBL_DONT_HAVE_EMAIL_PERMISSION : 'Non hai i permessi per il campo Email quindi non puoi selezionare l\'id dell\'email',
	LBL_NO_FEEDS_SELECTED: 'Nessun Feed selezionato',
	LBL_SELECT_PICKLIST:'Prego seleziona almeno un valore da eliminare',
	LBL_CANT_REMOVE:'Non puoi eliminare tutti i valori',
	LBL_UTF8:'Prego cambiare il file di configurazione (situato nella root di vte, con il nome config-inc.php) per il supporto al set di caratteri UTF-8 e poi aggiorna la pagina',
	//------------------crmvillage 504 release start----------------------
	SPECIAL_CHARACTERS:'I caratteri speciali',
        NOT_ALLOWED:'non sono ammessi nella label del campo. Prego provare con altri valori',
	LBL_NONE:'Nessuno',
        ENDS_WITH:'termina con',
	//------------------crmvillage 504 release stop----------------------
	POTENTIAL_AMOUNT_CANNOT_BE_EMPTY: 'Potential amount cannot be empty',
	//crmv@7213
	LBL_ALERT_EXT_CODE: "E' stato trovata una azienda con lo stesso codice esterno, vuoi fare il merge delle due aziende?",
	LBL_ALERT_EXT_CODE_NOTFOUND: "Non è stata trovata nessuna azienda importata con quel codice esterno, operazione annullata",
	LBL_ALERT_EXT_CODE_COMMIT: "Merge delle aziende avvenuto con successo, verra' caricata la pagina dell'azienda importata",
	LBL_ALERT_EXT_CODE_FAIL:'Operazione fallita',
	LBL_ALERT_EXT_CODE_DUPLICATE: "Si sta tentando di rifare il merge con quel codice oppure di usare il codice di un'azienda cancellata, operazione annullata. Svuotare il cestino e riprovare.",	//crmv@19653
	LBL_ALERT_EXT_CODE_SAVE: 'Vuoi salvare lo stesso le modifiche?',
	LBL_ALERT_EXT_CODE_NOTFOUND_SAVE: "Non è stata trovata nessuna azienda importato con quel codice esterno, salvare anche il codice esterno?",
	LBL_ALERT_EXT_CODE_NOTFOUND_SAVE2: "Non è stata trovata nessuna azienda importata con quel codice esterno, salvare comunque le modifiche all'azienda?",
	LBL_ALERT_EXT_CODE_NO_PERMISSION: "Esiste già un'azienda con lo stesso codice assegnata ad un altro utente, non hai quindi i permessi per eseguire il merge.",	//crmv@19653
	//crmv@7213e
	//crmv@7216
	DOESNOT_HAVE_AN_FAXID:'" '+"non ha un numero di fax",
	LBL_DONT_HAVE_FAX_PERMISSION:"Non hai i permessi per il campo Fax quindi non puoi selezionare l'id del Fax",
	//crmv@7216e
	//crmv@7217
	DOESNOT_HAVE_AN_SMSID:'" '+"non ha un numero di cellulare",
	LBL_DONT_HAVE_SMS_PERMISSION:"Non hai i permessi per il campo Cellulare quindi non puoi selezionare l'id dell'sms",
	//crmv@7217e

	NO_RULES_FOUND: 'Nessuna regola trovata per questo modulo, Sarai rimandato al form di creazione di una nuova regola',
	//crmv@7221
	//crmv@8719
	SAME_GROUPS: 'Devi selezionare i record presenti nello stesso gruppo di unione',
	ATLEAST_TWO: 'Seleziona almeno due record per l\'unione',
	MAX_THREE: 'è permesso selezionare un massimo di tre record',
	MAX_RECORDS: 'è permesso selezionare un massimo di quattro record',
	CON_MANDATORY: 'Seleziona il campo obbligatorio "Cognome"',
	LE_MANDATORY: 'Seleziona il campo obbligatorio "Cognome" e "Società"',
	ACC_MANDATORY: 'Seleziona il campo obbligatorio "Nome azienda"',
	PRO_MANDATORY: 'Seleziona il campo obbligatorio "Nome Prodotto"',
	TIC_MANDATORY: 'Seleziona il campo obbligatorio "Titolo Ticket"',
	POTEN_MANDATORY: 'Seleziona il campo obbligatorio "Nome Opportunità"',
	VEN_MANDATORY: 'Seleziona il campo obbligatorio "Nome fornitore"',
	DEL_MANDATORY: 'Non hai i permessi per cancellare un campo obbligatorio',
	//crmv@8719e

	LBL_HIDEHIERARCH: 'Nascondi gerarchia',
	LBL_SHOWHIERARCH: 'Visualizza gerarchia',

	 LBL_NO_ROLES_SELECTED : 'Non \u00E8 stato selezionato alcun ruolo, continuare ugualmente?',
	 LBL_DUPLICATE_FOUND : 'Trovate voci Duplicate per questo valore ',
	 LBL_CANNOT_HAVE_EMPTY_VALUE : 'Impossibile sostituire con valore vuoto, per rimuovere il valore usa l\'opzione Elimina.',
	 LBL_DUPLICATE_VALUE_EXISTS : 'Valore duplicato esistente',
	 LBL_WANT_TO_DELETE : 'Questo eliminer\u00E0 i valori selezionati dalla picklist per tutti i ruoli. Sicuro di voler continuare? ',
	 LBL_DELETE_ALL_WARNING : 'Deve avere almeno un valore per la picklist',
	 LBL_PLEASE_CHANGE_REPLACEMENT : 'prego cambiare il valore di sostituzione; \u00E8 stato selezionato per l\'eliminazione',
	 LBL_BLANK_REPLACEMENT : 'Non \u00E8 possibile selezionare un valore vuoto per la sostituzione',
	 LBL_PLEASE_SELECT:'--Prego Selezionare--',
	 MUST_BE_CHECKED: "Deve essere selezionato",
	 CHARACTER: "caratteri",
	 LENGTH: "la lunghezza di",

	/* For Multi-Currency Support */
	 MSG_CHANGE_CURRENCY_REVISE_UNIT_PRICE : 'Prezzo unitario di tutte le valute sar\u00E0 rivisto sulla base della valuta scelta. Sicuro ?',

	 Select_one_record_as_parent_record : 'Seleziona un record come rcord relazionato',
	 RECURRING_FREQUENCY_NOT_PROVIDED : 'Frequenza periodica non fornita',
	 RECURRING_FREQNECY_NOT_ENABLED : 'Frequenza periodica \u00E8 fornita, ma non abilitata',
	/* Added for Documents module */
	 NO_SPECIAL_CHARS_DOCS : 'Caratteri Speciali come apici, backslash, +, % e ? non sono consentiti',
	 FOLDER_NAME_TOO_LONG : 'Nome Cartella troppo lungo. Prova ancora!',
	 FOLDERNAME_EMPTY : 'Nome Cartella non pu\u00F2 essere vuoto',
	 DUPLICATE_FOLDER_NAME : 'Si \u00E8 provato a duplicare un nome du una cartella gi\u00E0 esistente. Prego prova ancora !',
	 FOLDER_DESCRIPTION_TOO_LONG : 'Descrizione Cartella troppo lunga. Prova ancora!',
	 NOT_PERMITTED : 'Non ti \u00E8 permesso eseguire questa operazione.',

	 ALL_FILTER_CREATION_DENIED : 'Impossibile creare una CustomView usando il nome "Tutto", prova ad usare un nome diverso',
	 OPERATION_DENIED : 'Operazione non eseguibile',
	 EMAIL_CHECK_MSG : 'Disabilita accesso al Portale per salvare l\'email come campo vuoto',
	 IS_PARENT : 'Questo Prodotto ha sotto prodotti, Non ti \u00E8 consentito scegliere una relazione per questo prodotto',

	/*layout Editor changes*/
	 BLOCK_NAME_CANNOT_BE_BLANK : 'Nome Blocco non pu\u00F2 essere vuoto',
	 ARE_YOU_SURE_YOU_WANT_TO_DELETE : 'Sicuro di volerlo eliminare ?',
	 PLEASE_MOVE_THE_FIELDS_TO_ANOTHER_BLOCK : 'Prego, spostare il campo in un altro blocco',
	 ARE_YOU_SURE_YOU_WANT_TO_DELETE_BLOCK : 'Sicuro di volerl eliminare il blocco ?',
	 LABEL_CANNOT_NOT_EMPTY : 'Etichetta non pu\u00F2 essere Vuota',
	 LBL_TYPEALERT_1 : 'Spiacente, non si pu\u00F2 mappare',
	 LBL_WITH : 'con',
	 LBL_TYPEALERT_2 : 'tipo dato. Per favore mappa gli stessi tipi di dato.',
	 LBL_LENGTHALERT : 'Spiacenti, non \u00E8 possibile mappare i campi con diversi caratteri. Per favore mappa i dati con gli stessi o pi\u00F9 caratteri.',
	 LBL_DECIMALALERT : 'Spiacenti, non \u00E8 possibile mappare i campi con diversi decimali. Per favore mappa i dati con gli stessi o pi\u00F9 decimali.',
	 FIELD_IS_MANDATORY : 'Campo Obbligatorio',
	 FIELD_IS_ACTIVE : 'Campo disponibile per l\'uso',
	 FIELD_IN_QCREATE : 'Presente in Creazione Veloce',
	 FIELD_IS_MASSEDITABLE : 'Disponibile per il Mass Edit',

	 IS_MANDATORY_FIELD : '\u00E8 un Campo Obbligatorio',
	 CLOSEDATE_CANNOT_BE_EMPTY:"Data di chiusura non pu\u00F2 essere vuota",
	 AMOUNT_CANNOT_BE_EMPTY : 'Quantit\u00E0 non pu\u00F2 essere Vuota',
	 ARE_YOU_SURE:'Sicuro?',
	 LABEL_ALREADY_EXISTS : 'Etichetta gi\u00E0 presente. Prego inserire una nome diverso',
	 LENGTH_OUT_OF_RANGE : 'Lunghezza del blocco deve essere inferiore a 50 caratteri',
	 LBL_SELECT_ONE_FILE : 'Prego selezionare almeno un File',
	 LBL_UNABLE_TO_ADD_FOLDER : 'Imposibile aggiunger cartella. Prego prova ancora.',
	 LBL_ARE_YOU_SURE_YOU_WANT_TO_DELETE_FOLDER : 'Sicuro di voler eliminare la cartella?',
	 LBL_ERROR_WHILE_DELETING_FOLDER : 'Errore mentre si eliminava la cartella. Prego prova ancora.',
	 LBL_FILE_CAN_BE_DOWNLOAD : 'File \u00E8 disponibile per il download',
	 LBL_DOCUMENT_LOST_INTEGRITY : 'Questi Documneti non sono disponibili. Saranno marcati come Inattivi',
	 LBL_DOCUMENT_NOT_AVAILABLE : 'Questo Documento non \u00E8 disponibile per il Download',
	 LBL_FOLDER_SHOULD_BE_EMPTY : 'La Cartella dovrebbe essere vuota per rimuoverla!',

	 LBL_PLEASE_SELECT_FILE_TO_UPLOAD : 'Prego selezionare il File da caricare.',
	 LBL_ARE_YOU_SURE_TO_MOVE_TO : 'Sicuro di voler spostare i file in ',
	 LBL_FOLDER : ' cartella',
	 LBL_UNABLE_TO_UPDATE : 'Impossibile Aggiornare! Prego prova ancora.',
	 LBL_BLANK_REPLACEMENT : 'Non \u00E8 possibile selezionare un valore vuoto per la sostituzione',

	 LBL_IMAGE_DELETED : 'Immagine Eliminata',

	/* Tooltip management */
	ERR_FIELD_SELECTION : 'Qualche errore nel campo selezionato',

	/* Inventory validation strings */
	 NO_LINE_ITEM_SELECTED : 'Nessuna riga \u00E8 stata selezioanta. Prego selezionare almeno una riga.',
	 LINE_ITEM : 'Riga prodotto',
	 LIST_PRICE : 'Listino',

	 LBL_WIDGET_HIDDEN : 'Widget Nascosto',
	 LBL_RESTORE_FROM_PREFERENCES : 'Puoi Ripristinarlo dalle tue preferenze',
	 ERR_HIDING : 'Errore mentre si nascondeva il widget',
	 MSG_TRY_AGAIN : 'Prego prova ancora',

	 MSG_ENABLE_SINGLEPANE_VIEW : 'Vita a Pannello Singolo Abilitata',
	 MSG_DISABLE_SINGLEPANE_VIEW : 'Vita a Pannello Singolo Disabilitata',

	 MSG_FTP_BACKUP_DISABLED : 'FTP Backup Disabilitato',
	 MSG_LOCAL_BACKUP_DISABLED : 'Backup Locale Disabilitato',
	 MSG_FTP_BACKUP_ENABLED : 'FTP Backup Abilitato',
	 MSG_LOCAL_BACKUP_ENABLED : 'Backup Locale Abilitato',
	 MSG_CONFIRM_PATH : 'percorso aggiornato',
	 MSG_CONFIRM_FTP_DETAILS : 'conferma con i dettagli FTP',

	 START_PERIOD_END_PERIOD_CANNOT_BE_EMPTY : 'Periodo Iniziale o Finale non pu\u00F2 essere vuoto',

	/* added to fix i18n issues with home page*/
	 LBL_ADD : 'Aggiungi ',
	 Module : 'Modulo',
	 DashBoard : 'Cruscotto',
	 RSS : 'RSS',
	 Default : 'Default',
	 SPECIAL_CHARS : '\ / < > + \' " ',

	//------------------crmvillage 510 release start----------------------
	SPECIAL_CHARACTERS:'I caratteri speciali',
    NOT_ALLOWED:'non sono ammessi nella label del campo. Prego provare con altri valori',
	LBL_NONE:'Nessuno',
    ENDS_WITH:'termina con',
	ERR_PIVA:'Partita IVA non valida !',
	ERR_CF:'Codice Fiscale non valido !',
	//------------------crmvillage 510 release stop----------------------

	EXISTING_RECORD: 'Record già esistente nel sistema con dati: ',
	EXISTING_SAVE: 'Vuoi salvare lo stesso?',
	EXISTING_SAVE_CONVERTLEAD: 'Procedendo il contatto e l\'eventuale opportunità verranno collegate all\'azienda esistente.',	//crmv@19438
	no_valid_extension:'Estensione del file non valida. Le enstensioni permesse sono pdf,ps e tiff',
	BETWEEN: 'tra',
	BEFORE: 'prima',
	AFTER: 'dopo',
	'ERROR_DELETING_TRY_AGAIN': 'Errore durante la cancellazione.Prego riprova.',
	'LBL_ENTER_WINDOW_TITLE': 'Prego inserire il titolo della finestra.',
	'LBL_SELECT_ONLY_FIELDS': 'Prego seleziona solo 2 campi.',
	'LBL_ENTER_RSS_URL':'Prego inserire l\'indirizzo del RSS',
	'LBL_ENTER_URL':'Prego inserire l\'indirizzo del website',
	'LBL_DELETED_SUCCESSFULLY':'Widget cancellato con successo.',
	'LBL_ADD_HOME_WIDGET': 'Non è stato possibile aggiungere il widget!! Prego riprova.',
	//crmv@9434
	LBL_STATUS_CHANGING: 'Cambia lo stato in ',
	LBL_STATUS_CHANGING_MOTIVATION: ' note :',
	LBL_STATUS_PLEASE_SELECT_A_MODULE : 'Scegliere un modulo',
	LBL_STATUS_PLEASE_SELECT_A_ROLE : "Scegliere un ruolo",
	//crmv@9434 e
	//crmv@17749
	OVERWRITE_EXISTING_CONTACT1:"Sovrascrivere l'indirizzo esistente con l'indirizzo del Contatto (",
	OVERWRITE_EXISTING_CONTACT2:') selezionato/a? \nCliccando Annulla l\'elemento verrà comunque legato mantenedo indipendenti gli indirizzi.',
	//crmv@17749e
	//crmv@27096
	LBL_MASS_EDIT_WITHOUT_WF_1:'Hai selezionato più di ',
	LBL_MASS_EDIT_WITHOUT_WF_2:' elementi, questo potrebbe sovraccaricare il server. Procedere all\'aggiornamento escludendo i Workflow?',
	//crmv@27096e
	//crmv@16703
	SELECT_SMSID:'Prego selezionare un identificativo di sms valido',
	NOTVALID_SMSID:'Numero di Cellulare non valido',
	NULL_SMSID:'Nessun numero di Cellulare specificato',
	//crmv@16703e
	//crmv@29386
	LBL_MANDATORY_FIELDS_WF:'Inserire il valore per i campi obbligatori',
	LBL_DELETE_MSG:'Sei sicuro di volere eliminare il webform?',
	LBL_DUPLICATE_NAME:'Il Webform esiste già',
	//crmv@29386e
	//crmv@29463
	ERR_SELECT_EITHER:'Selezionare Azienda o Contatto per convertire il Lead',
	ERR_SELECT_ACCOUNT:'Selezionare l\'Azienda per procedere',
	ERR_SELECT_CONTACT:'Selezionare il Contatto per procedere',
	ERR_MANDATORY_FIELD_VALUE:'Alcuni valori obbligatori sono mancanti, si prega di inserirli',
	ERR_POTENTIAL_AMOUNT:'L\'Ammontare deve essere un importo valido',
	ERR_EMAILID:'Inserire un valido Email Id',
	ERR_TRANSFER_TO_ACC:'Deve essere selezionata un\'Azienda per trasferire i record relazionati',
	ERR_TRANSFER_TO_CON:'Deve essere selzionato un contatto per trasferire i record relazionati',
	SURE_TO_DELETE_CUSTOM_MAP:'Sei sicuro di voler cancellare la Mappatura Campi?',
	LBL_CLOSE_DATE:'Data Chiusura',
	LBL_EMAIL:'Email',
	MORE_THAN_500 : 'Hai selezionato più di 500 records. Questa operazione potrebbe impiegare molto tempo. Vuoi continuare?',
	LBL_MAPPEDALERT:'Il campo è già stato mappato',
	//crmv@29463e
	//crmv@30967
	LBL_SELECT_DEL_FOLDER: 'Seleziona almeno una cartella',
	LBL_NO_EMPTY_FOLDERS: 'Non ci sono cartelle vuote',
	LBL_OR: 'o',
	//crmv@30967e
	LBL_SAVING_DRAFT: 'Salvataggio bozza in corso',
	//crmv@31619
	PLS_SELECT_VALID_FILE: 'Selezionare un file con le seguenti estensioni: ',
	ERR_SELECT_ATLEAST_ONE_MERGE_CRITERIA_FIELD: 'Selezionare almeno un campo per il controllo duplicati',
	ERR_FIELDS_MAPPED_MORE_THAN_ONCE: 'Il seguente campo è mappato più di una volta. Controllare la mappatura.',
	ERR_PLEASE_MAP_MANDATORY_FIELDS: 'è necessario mappare i seguenti campi obbligatori',
	ERR_MAP_NAME_CANNOT_BE_EMPTY: 'Inserire un nome per la mappatura',
	ERR_MAP_NAME_ALREADY_EXISTS: 'Esiste già una mappatura con questo nome.',
	//crmv@31619e
	//crmv@37679
	LBL_UT208_PASSWORDEMPTY: 'Scrivi una password',
	LBL_UT208_INVALIDSRV: 'Risposta non valida dal server',
	LBL_UT208_WRONGPWD: 'Password errata',
	LBL_UT208_DIFFPWD: 'Le password non coincidono',
	LBL_UT208_PWDCRITERIA: 'La password deve essere di almeno 6 caratteri',
	//crmv@37679e
	LBL_CHECK_BOUNCED_MESSAGES: 'Verifica email respinte',
	LBL_MAX_REPORT_SECMODS: 'Hai raggiunto il numero massimo di moduli secondari', // crmv@38798
	LBL_FILTER: 'Filtro',
	LBL_TEMPLATE_MUST_HAVE_NAME: 'Devi dare un nome al template',
	LBL_MUST_TYPE_SUBJECT: 'Devi specificare un oggetto',
	LBL_SELECT_RECIPIENTS: 'Seleziona almeno un destinatario',
	LBL_SELECT_TEMPLATE: 'Seleziona un template',
	LBL_FILL_FIELDS: 'Compilare i seguenti campi',
	LBL_SEND_TEST_EMAIL: 'Devi inviare l\'email di test prima',
	LBL_INVALID_EMAIL: 'Indirizzo email non valido',
	LBL_TEST_EMAIL_SENT: 'Email di test spedita correttamente',
	LBL_ERROR_SENDING_TEST_EMAIL: 'Errore durante la spedizione dell\'email di test',
	LBL_ERROR_SAVING: 'Errore durante il salvataggio',
	LBL_NEWSLETTER_SCHEDULED: 'Newsletter creata e pianificata per l\'ora indicata',
	SEND_MAIL_ERROR: 'Errore: invio mail non riuscito',
	LBL_SAVE_LAST_CHANGES: 'Vuoi salvare?\nCliccando Annulla verranno perse le modifiche appena apportate.',
	LBL_FPOFV_RULE_NAME:'Nome Regola',
	LBL_LEAST_ONE_CONDITION:'Manca almeno una condizione su un campo',
	LBL_LEAST_ONE_FIELD:'Manca almeno un campo', // crmv@190416
	LBL_FPOFV_RULE_NAME_DUPLICATED:'Nome Regola duplicato',
	//crmv@48693
	LBL_ADVSEARCH_STARTDATE: 'da',
	LBL_ADVSEARCH_ENDDATE: 'a',
	LBL_ADVSEARCH_DATE_CUSTOM: 'personalizzato',
	LBL_ADVSEARCH_DATE_YESTARDAY: 'ieri',
	LBL_ADVSEARCH_DATE_TODAY: 'oggi',
	LBL_ADVSEARCH_DATE_LASTWEEK: 'settimana scorsa',
	LBL_ADVSEARCH_DATE_THISWEEK: 'questa settimana',
	LBL_ADVSEARCH_DATE_LASTMONTH: 'mese scorso',
	LBL_ADVSEARCH_DATE_THISMONTH: 'questo mese',
	LBL_ADVSEARCH_DATE_LAST60DAYS: 'scorsi 60 giorni',
	LBL_ADVSEARCH_DATE_LAST90DAYS: 'scorsi 90 giorni',
	//crmv@48693e
	LBL_TEMPLATE_MUST_HAVE_UNSUBSCRIPTION_LINK: 'Manca il link per la disiscrizione. Procedere comunque?',
	LBL_TEMPLATE_MUST_HAVE_PREVIEW_LINK: 'Manca il link per l\'anteprima. Procedere comunque?',
	//crmv@56962
	HAS_CHANGED: 'è cambiato in',
	ENDS_WITH: 'finisce con',
	//crmv@56962e
	//crmv@68357
	ANSWER_SENT: 'La risposta e` stata inviata',
	CONFIRM_LINKED_EVENT_DELETION: 'Vuoi anche eliminare l\'evento collegato?',
	//crmv@68357e
	//crmv@64542
	LBL_TOO_LONG: '%s e` troppo lungo',
	LBL_NAME: 'Nome',
	LBL_NAME_S: 'Nome %s',
	LBL_FILL_ALL_FIELDS: 'Inserire i valori per tutti i campi richiesti',
	LBL_FILTER_FIELD_MORE_THAN_ONCE: 'Hai selezionato lo stesso campo pi&ugrave; di una volta. I campi devono essere diversi',
	LBL_SELECT_AT_LEAST_ONE_FIELD: 'Seleziona almeno un campo',
	LBL_MMAKER_CONFIRM_RESET: 'Sicuro di voler ripristinare i files allo stato iniziale? Verranno perse eventuali modifiche.',
	LBL_WANT_TO_SAVE_PENDING_CHANGES: 'Vuoi salvare le modifiche effettuate?',
	LBL_SURE_TO_UNINSTALL_MODULE: 'Disinstallando il modulo, ne verranno rimossi tutti i record. Procedere?',
	LBL_TOO_MANY_UITYPE4: 'E\' presente pi&ugrave; di un campo di tipo Numerazione Automatica. E\' possibile crearne solo uno per modulo',
	LBL_SAMEMODULERELATED: 'Il modulo %s &egrave; presente in pi&ugrave; di un campo relazione. E\' possible avere solo una relazione per ogni modulo collegato',
	//crmv@64542e
	//crmv@65455
	LBL_PLEASE_SELECT_MODULE: 'Seleziona un modulo',
	LBL_PLEASE_SELECT_VALUE: 'Seleziona un valore',
	LBL_FIELD_IS_NUMERIC: 'Il campo %s deve essere un numero',
	LBL_FIELD_IS_INVALID: 'Il campo %s non &egrave; corretto',
	LBL_CSVPATH_MUST_NOT_BE_ABSOLUTE: 'Il percorso del file CSV non pu&ograve; essere assoluto',
	LBL_VALUE_TOO_SMALL: 'Valore troppo piccolo',
	LBL_VALUE_TOO_BIG: 'Valore troppo grande',
	LBL_INVALID_VALUE: 'Valore non valido',
	LBL_CONTINUE_WITHOUT_KEY_FIELD: 'Non &egrave; stato selezionato nessun campo come chiave. Ad ogni importazione i record verranno aggiunti al CRM. Confermi?',
	LBL_DATA_IMPORT_SCHEDULED_NOW: 'L\'importazione &egrave; stata messa in coda. Entro pochi minuti inizier&agrave; automaticamente',
	LBL_DATA_IMPORT_ABORTED: 'L\'importazione &egrave; stata annullata. In caso fosse gi&agrave; iniziata, verr&agrave; interrotta entro pochi minuti',
	LBL_SELECT_TABLE_OR_QUERY: 'Se vuoi usare una query personalizzata, scegli "Nessuno" come tabella',
	LBL_CANT_USE_DEFAULT_MAPPED_FIELD: 'Non puoi usare un default in creazione o modifica per un campo che &egrave; mappato nell\'importazione',
	//crmv@65455e
	CONFIRM_EMPTY_FOLDER: 'Sicuro di voler svuotare la cartella? Tutti i messaggi saranno eliminati.',
	// crmv@83305
	LBL_FOLLOW: 'Notificami modifiche',
	LBL_UNFOLLOW: 'Non notificarmi le modifiche',
	// crmv@83305e
	LBL_MASS_EDIT_ENQUEUE: 'Hai selezionato più di {max_records} elementi. L\'elaborazione verrà eseguita in background e verrai notificato al termine.', // crmv@91571
	GROUPAGE_DUPLICATED: 'Raggruppamento duplicato per il campo: %s',
	//crmv@92272
	LBL_NEW_CONDITION_BUTTON_LABEL: 'Nuova Condizione',
	LBL_REMOVE_GROUP_CONDITION: 'Cancella Gruppo',
	LBL_PMH_SELECT_RELATED_TO: 'Seleziona un\'entità collegata al Process Helper oppure disattivalo',
	LBL_PM_CHECK_ACTIVE: 'Il processo non è ancora attivo. Vuoi attivarlo adesso?',
	LBL_PM_NO_ENTITY_SELECTED: 'Nessuna entità selezionata',
	LBL_PM_NO_CHECK_SELECTED: 'Nessun controllo impostato',
	//crmv@92272e
	LBL_FILESIZE_EXCEEDS_MAX_UPLOAD_SIZE: 'Il file è più grande della dimensione massima consentita.',
	LBL_GROUPBY: 'Raggruppa',
	LBL_SUMMARY: 'Riassuntivo',
	MODULE_RELATED_TO: 'Modulo relazionato a',
	LBL_SEARCH: 'Cerca',
	LBL_CHOOSE_A_REPORT: 'Scegli un report',
	LBL_BACK: 'Indietro',
	MISSING_COMPARATOR: 'Scegli una condizione di confronto',
	//crmv@OPER6288
	LBL_LABEL: 'Etichetta',
	LBL_KANBAN_DRAG_HERE: 'Abilita drag here',
	//crmv@OPER6288e
	LBL_DISABLE_MODULE: 'Disabilitare il modulo %s?',
	LBL_REPORT_NAME: 'Nome report',
	LBL_DESCRIPTION: 'Descrizione',
	//crmv@100495
	LBL_NO_RUN_PROCESSES: 'Nessun processo eseguito',
	LBL_RUN_PROCESSES_OK: 'Processo eseguito con successo',
	LBL_RUN_PROCESSES_ERROR: 'E\' stato riscontrato un errore nell\'esecuzione del processo',
	//crmv@100495e
	LBL_PM_ELEMENTS_ACTORS: 'Partecipanti',
	//crmv@100731
	LBL_PM_SELECT_RESOURCE: 'Prego selezionare un utente',
	LBL_PM_SELECT_ENTITY: 'Prego selezionare un\'entità',
	//crmv@100731e
	//crmv@101503
	ERR_TARGET: 'Non è possibile creare il target. La lista risulta vuota.',
	ERR_TARGET_XLS: 'Non è possibile esportare i dati. La lista risulta vuota.',
	//crmv@101503e
	NO_ADDRESS_SELECTED: 'Nessun indirizzo selezionato',
	LBL_PLEASE_ADD_COLUMNS: 'Aggiungere almeno una colonna',
	LBL_PLEASE_NAME_ALL_COLUMNS: 'Dai un nome a tutte le colonne',
	LBL_PLEASE_CHOOSE_FIELDNAME: 'Inserisci un nome per il campo',
	HAS_EXACTLY_ROWS: 'ha esattamente',
	HAS_LESS_ROWS: 'ha meno di',
	HAS_MORE_ROWS: 'ha più di',
	LBL_ROWS: 'righe',
	LBL_AUTO_TMP_NAME: '[AUTO TEMPLATE]',
	LBL_TODAY: 'Oggi',
	LBL_CANCEL: 'Annulla',
	LBL_NO_NETWORK: 'Nessuna connessione di rete disponibile.',
	LBL_TABLEFIELD_SUM: 'Somma',
	LBL_TABLEFIELD_MIN: 'Minimo',
	LBL_TABLEFIELD_MAX: 'Massimo',
	LBL_TABLEFIELD_AVERAGE: 'Media',
	LBL_TABLEFIELD_LAST_VALUE: 'Ultimo',
	LBL_TABLEFIELD_SEQUENCE: 'Sequenza',
	LBL_TABLEFIELD_CURR_VALUE: 'Corrente',
	LBL_TABLEFIELD_ALL: 'Tutti',
	LBL_TABLEFIELD_AT_LEAST_ONE: 'Almeno uno',
	LBL_SELECT_OPTION_DOTDOTDOT: 'Seleziona Opzione...',
	LBL_ADD_PICKLIST_VALUE: 'Prego inserire almeno un valore',
	HelpDeskFromMail: 'Mail Mittente VTE',
	LBL_CONFIRM_CLOSE_POPUP: 'Chiudere il popup?',
	LBL_NO_VALUES_TO_DELETE: 'Nessun valore selezionato',
	LBL_ADDTODO: 'Compito',
	SUCCESS: 'Success',
	LBL_EXTWS_NO_RETURN_FIELDS: 'Devi configurare almeno un campo restituito. Puoi aggiungerli manualmente o automaticamte tramite il pulsante Prova Web service',
	LBL_EXTWS_DUP_RETURN_FIELDS: 'I campi restituiti devono avere nomi diversi',
	LBL_EXTWS_EMPTY_RETURN_FIELD: 'Imposta un valore per tutti i campi restituiti',
	LBL_DONT_USE: 'Non usare',
	DELETE_CONTACT: 'Cancellando questo contatto verranno cancellate anche le opportunità associate. Sicuro di volerlo eliminare?',
	DELETE_CONTACTS: 'Cancellando questi contatti verranno cancellate anche le opportunità associate. Sicuro di volerli eliminare?',
	DB_ROW_LIMIT_REACHED: 'Il database non permette di aggiungere ulteriori campi. Contatta il servizio clienti VTECRM per aumentare il limite.',
	call: 'Chiamata',
	meeting: 'Riunione',
	tracked: 'Tracciato',
	select_template: 'Selezionare il template pdf',
	LBL_IMAP_SERVER_NAME: 'Nome Server Imap',
	LBL_SMTP_SERVER_NAME: 'Nome Server Smtp',
	LBL_FIND_PORTAL_DUPLICATES: 'Esiste già un utente portale con questa email',
	LBL_ERROR_PORTAL_DUPLICATES: 'Errore nella ricerca di utenti portale duplicati',
	ARE_YOU_SURE_INCREMENT_VERSION: 'Sei sicuro di voler salvare una nuova versione?',
	LBL_OLD_VERSION: 'Congela',
	LBL_NEW_VERSION: 'Usa recente',
	LBL_INCREMENT_VERSION_ERR_1: 'Sono stati rilevati dei processi in esecuzione. Vuoi congelare l\'esecuzione alla versione %1 o utilizzare la versione più recente del diagramma?',
	LBL_INCREMENT_VERSION_ERR_2: 'Sono stati rilevati dei processi in esecuzione. Vuoi congelare l\'esecuzione alla versione %1 o utilizzare la versione più recente del diagramma?<br>Inoltre sono state rilevate modifiche pendenti nelle seguenti configurazioni:%2Scegliendo CONGELA verranno anche salvate automaticamente tutte queste modifiche pendenti.',
	ARE_YOU_SURE_INCREMENT_VERSION_FOR_DOWNLOAD: 'Sono state individuate delle modifiche pendenti. L\'esportazione forzerà il salvataggio di versione. Vuoi procedere comunque?',
	LBL_REQ_FAILED_NO_CONNECTION: 'Nessuna connessione di rete disponibile al momento. Riprova',
	// crmv@160733
	LBL_TYPE_A_COMMENT: 'Inserisci un commento prima',
	LBL_CONFIDENTIAL_INFO_ALREADY_PROVIDED: 'Le informazioni richieste sono già state fornite',
	LBL_OPERATION_NOT_SUPPORTED_EDITVIEW: 'Questa operazione non è supportata in modalità EditView',
	// crmv@160733e
	LBL_CONFIRM_REMOTE_WIPE: 'I dati scaricati dall\'utente su tutti i dispositivi associati verranno eliminati. Procedere?',
	LBL_REMOTE_WIPE_OK: 'Operazione completata. Al prossimo accesso via app, l\'utente verrà disconnesso.',
	// crmv@158392
	PDFMAKER_DELETE_CONFIRMATION: 'Sicuro di voler eliminare i template selezionati?',
	SELECT_ATLEAST_ONE: 'Prego selezionare almeno un`entita`',
	// crmv@158392e
	// crmv@167019
	LBL_SAVE: 'Salva',
	LBL_CANCEL_ALL: 'Cancella tutto',
	LBL_REVISION_DROP_LIMIT: 'Non puoi inserire piu\' di un file per la revisione di un documento.',
	LBL_REVISION_CONFIRM: 'Sei sicuro di voler revisionare il documento?',
	// crmv@167019e
	// crmv@171115
	confirm_exit_from_panel: 'Vuoi uscire dal pannello? I dati inseriti non verranno salvati.',
	// crmv@171115e
	// crmv@171507
	LBL_SET_ADVRULE_NAME: "Assegnare un nome alla regola",
	LBL_SET_ADVRULE_OPERATOR: "Settare l'operatore per la regola ",
	LBL_SET_ONE_ADVRULE: "Settare almeno una regola",
	LBL_SET_ADVRULES_IN_ORDER: "Prego inserire le regole in ordine",
	// crmv@171507e
	// crmv@172355
	LBL_CHART_NO_DATA: 'Nessun dato disponibile.',
	LBL_CHART_NO_SUMMARY: 'Report sprovvisto di riassuntivo.',
	LBL_REPORT_REMOVE_CHARTS_1: 'Il report non è più riassuntivo, ma hai 1 grafico associato. Eliminarlo?',
	LBL_REPORT_REMOVE_CHARTS_N: 'Il report non è più riassuntivo, ma hai {n} grafici associati. Eliminarli?',
	// crmv@172355e
	LBL_CONFIRM_SHARE_PARENT_HELP_0: 'Nessuna eccezione della visibilità verrà attiva per le informazioni collegate',
	LBL_CONFIRM_SHARE_PARENT_HELP_1: 'Verrà estesa la visibilità delle informazioni ma non saranno permesse modifiche',
	LBL_CONFIRM_SHARE_PARENT_HELP_2: 'Verrà estesa la visibilità delle informazioni e saranno permesse modifiche',
	update_ignored: 'Aggiornamento ignorato',
	update_postponed: 'Aggiornamento posticipato',
	update_canceled: 'Aggiornamento annullato',
	LBL_YOU_MUST_SELECT_USERS: 'Devi selezionare degli utenti',
	LBL_YOU_MUST_TYPE_A_MESSAGE: 'Devi scrivere un messaggio',
	LBL_VTESYNC_SELECT_TYPE: 'Devi selezionare un sistema esterno',
	LBL_VTESYNC_SELECT_MODS: 'Devi selezionare almeno un modulo',
	LBL_VTESYNC_SELECT_AUTH: 'Devi selezionare un tipo di autenticazione',
	LBL_VTESYNC_FILL_OAUTH2: 'Devi inserire tutti i dati necessari all\'autenticazione',
	LBL_VTESYNC_OAUTH2_AUTH: 'Devi autorizzare le credenziali inserite',
	// crmv@187621
	LBL_NOTIFICATION_BODY: 'Visualizza',
	LBL_NOTIFICATION_TITLE_S_ModComments: 'nuova conversazione',
	LBL_NOTIFICATION_TITLE_P_ModComments: 'nuove conversazioni',
	LBL_NOTIFICATION_TITLE_S_Messages: 'nuovo messaggio',
	LBL_NOTIFICATION_TITLE_P_Messages: 'nuove messaggi',
	LBL_NOTIFICATION_TITLE_S_Processes: 'nuovo processo',
	LBL_NOTIFICATION_TITLE_P_Processes: 'nuove processi',
	// crmv@187621e
	COLUMNS_CANNOT_BE_DUPLICATED: 'Le colonne non possono essere duplicate',
	DELETE_RSSFEED_CONFIRMATION: 'Sicuro di voler cancellare questo feed Rss?',
	LBL_AUDIT_TRAIL_ENABLED: 'Controllo utente abilitato',
	LBL_AUDIT_TRAIL_DISABLED: 'Controllo utente disabilitato',
	PLEASE_ENTER_TAG: 'Prego inserire un tag',
	SERVERNAME_CANNOT_BE_EMPTY: 'Il nome del server non puo` essere vuoto',
	LBL_BAD_CHARACTER_PICKLIST_VALUE: 'Non sono permessi i seguenti caratteri',
	GRAPES_CO_WARNING: 'Per utilizzare l`upload delle immagini devi eseguire l`accesso tramite l`indirizzo %s',
	LBL_GRAPES_SYNTAX_ERROR: 'Il codice HTML contiene degli errori di sintassi. L\'errore generato dal sistema è: \"%s\". Revisiona il tuo codice e riprova.',
	LBL_TRANS_SETTINGS_SAVED: 'Campo di stato salvato',
	LBL_TRANS_DELETED: 'Il campo di stato è stato rimosso correttamente',
	LBL_LOAD_RELATIONS_ENQUEUE: 'Hai selezionato più di {max_records} record. L\'operazione continuerà in background e sarai notificato al termine.',
	LBL_MASS_CREATE_ENQUEUE_TELEMARKETING: 'I target che hai selezionato contengono più di {max_records} elementi. Il processo di sincronizzazione Telemarketing verrà eseguita in background e verrai notificato al termine.', // crmv@202577
	LBL_ATTACHMENT_NOT_EXIST: 'L\'allegato {name} non esiste, probabilmente il messaggio è stato spostato in un\'altra cartella.',
    LBL_ATTACHMENT_DELETED: 'Il messaggio è stato spostato in un\'altra cartella. Attendi qualche minuto affinché si sincronizzi.',
    // crmv@205899
	LBL_GRAPES_MODULE: 'Modulo',
	LBL_GRAPES_FIELD: 'Campo',
	LBL_GRAPES_INSERT: 'Inserisci',
	LBL_GRAPES_EMPTY_PLACEHOLDER: '-- Seleziona --',
	// crmv@205899e
	LBL_AUTHENTICATION_REQUIRED: 'E\' necessario eseguire l\'autenticazione',
	LBL_KLONDIKE_UNLINK_CONFIRM: 'Rimuovendo il collegamento con Klondike non potrai più accedere alla tua istanza tramite questi pulsanti. Vuoi continuare?', // crmv@215597
};
