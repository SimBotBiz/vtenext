<?php
/*************************************
 * SPDX-FileCopyrightText: 2009-2020 Vtenext S.r.l. <info@vtenext.com> 
 * SPDX-License-Identifier: AGPL-3.0-only  
 ************************************/

/* crmv@201442 */

/* ISO 3166-1 alpha2 country code -> unicode flag */

$unicode_flags = [
	'AD' => '&#x1F1E6;&#x1F1E9;',
	'AE' => '&#x1F1E6;&#x1F1EA;',
	'AF' => '&#x1F1E6;&#x1F1EB;',
	'AG' => '&#x1F1E6;&#x1F1EC;',
	'AI' => '&#x1F1E6;&#x1F1EE;',
	'AL' => '&#x1F1E6;&#x1F1F1;',
	'AM' => '&#x1F1E6;&#x1F1F2;',
	'AO' => '&#x1F1E6;&#x1F1F4;',
	'AQ' => '&#x1F1E6;&#x1F1F6;',
	'AR' => '&#x1F1E6;&#x1F1F7;',
	'AS' => '&#x1F1E6;&#x1F1F8;',
	'AT' => '&#x1F1E6;&#x1F1F9;',
	'AU' => '&#x1F1E6;&#x1F1FA;',
	'AW' => '&#x1F1E6;&#x1F1FC;',
	'AX' => '&#x1F1E6;&#x1F1FD;',
	'AZ' => '&#x1F1E6;&#x1F1FF;',
	'BA' => '&#x1F1E7;&#x1F1E6;',
	'BB' => '&#x1F1E7;&#x1F1E7;',
	'BD' => '&#x1F1E7;&#x1F1E9;',
	'BE' => '&#x1F1E7;&#x1F1EA;',
	'BF' => '&#x1F1E7;&#x1F1EB;',
	'BG' => '&#x1F1E7;&#x1F1EC;',
	'BH' => '&#x1F1E7;&#x1F1ED;',
	'BI' => '&#x1F1E7;&#x1F1EE;',
	'BJ' => '&#x1F1E7;&#x1F1EF;',
	'BL' => '&#x1F1E7;&#x1F1F1;',
	'BM' => '&#x1F1E7;&#x1F1F2;',
	'BN' => '&#x1F1E7;&#x1F1F3;',
	'BO' => '&#x1F1E7;&#x1F1F4;',
	'BQ' => '&#x1F1E7;&#x1F1F6;',
	'BR' => '&#x1F1E7;&#x1F1F7;',
	'BS' => '&#x1F1E7;&#x1F1F8;',
	'BT' => '&#x1F1E7;&#x1F1F9;',
	'BV' => '&#x1F1E7;&#x1F1FB;',
	'BW' => '&#x1F1E7;&#x1F1FC;',
	'BY' => '&#x1F1E7;&#x1F1FE;',
	'BZ' => '&#x1F1E7;&#x1F1FF;',
	'CA' => '&#x1F1E8;&#x1F1E6;',
	'CC' => '&#x1F1E8;&#x1F1E8;',
	'CD' => '&#x1F1E8;&#x1F1E9;',
	'CF' => '&#x1F1E8;&#x1F1EB;',
	'CG' => '&#x1F1E8;&#x1F1EC;',
	'CH' => '&#x1F1E8;&#x1F1ED;',
	'CI' => '&#x1F1E8;&#x1F1EE;',
	'CK' => '&#x1F1E8;&#x1F1F0;',
	'CL' => '&#x1F1E8;&#x1F1F1;',
	'CM' => '&#x1F1E8;&#x1F1F2;',
	'CN' => '&#x1F1E8;&#x1F1F3;',
	'CO' => '&#x1F1E8;&#x1F1F4;',
	'CR' => '&#x1F1E8;&#x1F1F7;',
	'CU' => '&#x1F1E8;&#x1F1FA;',
	'CV' => '&#x1F1E8;&#x1F1FB;',
	'CW' => '&#x1F1E8;&#x1F1FC;',
	'CX' => '&#x1F1E8;&#x1F1FD;',
	'CY' => '&#x1F1E8;&#x1F1FE;',
	'CZ' => '&#x1F1E8;&#x1F1FF;',
	'DE' => '&#x1F1E9;&#x1F1EA;',
	'DJ' => '&#x1F1E9;&#x1F1EF;',
	'DK' => '&#x1F1E9;&#x1F1F0;',
	'DM' => '&#x1F1E9;&#x1F1F2;',
	'DO' => '&#x1F1E9;&#x1F1F4;',
	'DZ' => '&#x1F1E9;&#x1F1FF;',
	'EC' => '&#x1F1EA;&#x1F1E8;',
	'EE' => '&#x1F1EA;&#x1F1EA;',
	'EG' => '&#x1F1EA;&#x1F1EC;',
	'EH' => '&#x1F1EA;&#x1F1ED;',
	'ER' => '&#x1F1EA;&#x1F1F7;',
	'ES' => '&#x1F1EA;&#x1F1F8;',
	'ET' => '&#x1F1EA;&#x1F1F9;',
	'FI' => '&#x1F1EB;&#x1F1EE;',
	'FJ' => '&#x1F1EB;&#x1F1EF;',
	'FK' => '&#x1F1EB;&#x1F1F0;',
	'FM' => '&#x1F1EB;&#x1F1F2;',
	'FO' => '&#x1F1EB;&#x1F1F4;',
	'FR' => '&#x1F1EB;&#x1F1F7;',
	'GA' => '&#x1F1EC;&#x1F1E6;',
	'GB' => '&#x1F1EC;&#x1F1E7;',
	'GD' => '&#x1F1EC;&#x1F1E9;',
	'GE' => '&#x1F1EC;&#x1F1EA;',
	'GF' => '&#x1F1EC;&#x1F1EB;',
	'GG' => '&#x1F1EC;&#x1F1EC;',
	'GH' => '&#x1F1EC;&#x1F1ED;',
	'GI' => '&#x1F1EC;&#x1F1EE;',
	'GL' => '&#x1F1EC;&#x1F1F1;',
	'GM' => '&#x1F1EC;&#x1F1F2;',
	'GN' => '&#x1F1EC;&#x1F1F3;',
	'GP' => '&#x1F1EC;&#x1F1F5;',
	'GQ' => '&#x1F1EC;&#x1F1F6;',
	'GR' => '&#x1F1EC;&#x1F1F7;',
	'GS' => '&#x1F1EC;&#x1F1F8;',
	'GT' => '&#x1F1EC;&#x1F1F9;',
	'GU' => '&#x1F1EC;&#x1F1FA;',
	'GW' => '&#x1F1EC;&#x1F1FC;',
	'GY' => '&#x1F1EC;&#x1F1FE;',
	'HK' => '&#x1F1ED;&#x1F1F0;',
	'HM' => '&#x1F1ED;&#x1F1F2;',
	'HN' => '&#x1F1ED;&#x1F1F3;',
	'HR' => '&#x1F1ED;&#x1F1F7;',
	'HT' => '&#x1F1ED;&#x1F1F9;',
	'HU' => '&#x1F1ED;&#x1F1FA;',
	'ID' => '&#x1F1EE;&#x1F1E9;',
	'IE' => '&#x1F1EE;&#x1F1EA;',
	'IL' => '&#x1F1EE;&#x1F1F1;',
	'IM' => '&#x1F1EE;&#x1F1F2;',
	'IN' => '&#x1F1EE;&#x1F1F3;',
	'IO' => '&#x1F1EE;&#x1F1F4;',
	'IQ' => '&#x1F1EE;&#x1F1F6;',
	'IR' => '&#x1F1EE;&#x1F1F7;',
	'IS' => '&#x1F1EE;&#x1F1F8;',
	'IT' => '&#x1F1EE;&#x1F1F9;',
	'JE' => '&#x1F1EF;&#x1F1EA;',
	'JM' => '&#x1F1EF;&#x1F1F2;',
	'JO' => '&#x1F1EF;&#x1F1F4;',
	'JP' => '&#x1F1EF;&#x1F1F5;',
	'KE' => '&#x1F1F0;&#x1F1EA;',
	'KG' => '&#x1F1F0;&#x1F1EC;',
	'KH' => '&#x1F1F0;&#x1F1ED;',
	'KI' => '&#x1F1F0;&#x1F1EE;',
	'KM' => '&#x1F1F0;&#x1F1F2;',
	'KN' => '&#x1F1F0;&#x1F1F3;',
	'KP' => '&#x1F1F0;&#x1F1F5;',
	'KR' => '&#x1F1F0;&#x1F1F7;',
	'KW' => '&#x1F1F0;&#x1F1FC;',
	'KY' => '&#x1F1F0;&#x1F1FE;',
	'KZ' => '&#x1F1F0;&#x1F1FF;',
	'LA' => '&#x1F1F1;&#x1F1E6;',
	'LB' => '&#x1F1F1;&#x1F1E7;',
	'LC' => '&#x1F1F1;&#x1F1E8;',
	'LI' => '&#x1F1F1;&#x1F1EE;',
	'LK' => '&#x1F1F1;&#x1F1F0;',
	'LR' => '&#x1F1F1;&#x1F1F7;',
	'LS' => '&#x1F1F1;&#x1F1F8;',
	'LT' => '&#x1F1F1;&#x1F1F9;',
	'LU' => '&#x1F1F1;&#x1F1FA;',
	'LV' => '&#x1F1F1;&#x1F1FB;',
	'LY' => '&#x1F1F1;&#x1F1FE;',
	'MA' => '&#x1F1F2;&#x1F1E6;',
	'MC' => '&#x1F1F2;&#x1F1E8;',
	'MD' => '&#x1F1F2;&#x1F1E9;',
	'ME' => '&#x1F1F2;&#x1F1EA;',
	'MF' => '&#x1F1F2;&#x1F1EB;',
	'MG' => '&#x1F1F2;&#x1F1EC;',
	'MH' => '&#x1F1F2;&#x1F1ED;',
	'MK' => '&#x1F1F2;&#x1F1F0;',
	'ML' => '&#x1F1F2;&#x1F1F1;',
	'MM' => '&#x1F1F2;&#x1F1F2;',
	'MN' => '&#x1F1F2;&#x1F1F3;',
	'MO' => '&#x1F1F2;&#x1F1F4;',
	'MP' => '&#x1F1F2;&#x1F1F5;',
	'MQ' => '&#x1F1F2;&#x1F1F6;',
	'MR' => '&#x1F1F2;&#x1F1F7;',
	'MS' => '&#x1F1F2;&#x1F1F8;',
	'MT' => '&#x1F1F2;&#x1F1F9;',
	'MU' => '&#x1F1F2;&#x1F1FA;',
	'MV' => '&#x1F1F2;&#x1F1FB;',
	'MW' => '&#x1F1F2;&#x1F1FC;',
	'MX' => '&#x1F1F2;&#x1F1FD;',
	'MY' => '&#x1F1F2;&#x1F1FE;',
	'MZ' => '&#x1F1F2;&#x1F1FF;',
	'NA' => '&#x1F1F3;&#x1F1E6;',
	'NC' => '&#x1F1F3;&#x1F1E8;',
	'NE' => '&#x1F1F3;&#x1F1EA;',
	'NF' => '&#x1F1F3;&#x1F1EB;',
	'NG' => '&#x1F1F3;&#x1F1EC;',
	'NI' => '&#x1F1F3;&#x1F1EE;',
	'NL' => '&#x1F1F3;&#x1F1F1;',
	'NO' => '&#x1F1F3;&#x1F1F4;',
	'NP' => '&#x1F1F3;&#x1F1F5;',
	'NR' => '&#x1F1F3;&#x1F1F7;',
	'NU' => '&#x1F1F3;&#x1F1FA;',
	'NZ' => '&#x1F1F3;&#x1F1FF;',
	'OM' => '&#x1F1F4;&#x1F1F2;',
	'PA' => '&#x1F1F5;&#x1F1E6;',
	'PE' => '&#x1F1F5;&#x1F1EA;',
	'PF' => '&#x1F1F5;&#x1F1EB;',
	'PG' => '&#x1F1F5;&#x1F1EC;',
	'PH' => '&#x1F1F5;&#x1F1ED;',
	'PK' => '&#x1F1F5;&#x1F1F0;',
	'PL' => '&#x1F1F5;&#x1F1F1;',
	'PM' => '&#x1F1F5;&#x1F1F2;',
	'PN' => '&#x1F1F5;&#x1F1F3;',
	'PR' => '&#x1F1F5;&#x1F1F7;',
	'PS' => '&#x1F1F5;&#x1F1F8;',
	'PT' => '&#x1F1F5;&#x1F1F9;',
	'PW' => '&#x1F1F5;&#x1F1FC;',
	'PY' => '&#x1F1F5;&#x1F1FE;',
	'QA' => '&#x1F1F6;&#x1F1E6;',
	'RE' => '&#x1F1F7;&#x1F1EA;',
	'RO' => '&#x1F1F7;&#x1F1F4;',
	'RS' => '&#x1F1F7;&#x1F1F8;',
	'RU' => '&#x1F1F7;&#x1F1FA;',
	'RW' => '&#x1F1F7;&#x1F1FC;',
	'SA' => '&#x1F1F8;&#x1F1E6;',
	'SB' => '&#x1F1F8;&#x1F1E7;',
	'SC' => '&#x1F1F8;&#x1F1E8;',
	'SD' => '&#x1F1F8;&#x1F1E9;',
	'SE' => '&#x1F1F8;&#x1F1EA;',
	'SG' => '&#x1F1F8;&#x1F1EC;',
	'SH' => '&#x1F1F8;&#x1F1ED;',
	'SI' => '&#x1F1F8;&#x1F1EE;',
	'SJ' => '&#x1F1F8;&#x1F1EF;',
	'SK' => '&#x1F1F8;&#x1F1F0;',
	'SL' => '&#x1F1F8;&#x1F1F1;',
	'SM' => '&#x1F1F8;&#x1F1F2;',
	'SN' => '&#x1F1F8;&#x1F1F3;',
	'SO' => '&#x1F1F8;&#x1F1F4;',
	'SR' => '&#x1F1F8;&#x1F1F7;',
	'SS' => '&#x1F1F8;&#x1F1F8;',
	'ST' => '&#x1F1F8;&#x1F1F9;',
	'SV' => '&#x1F1F8;&#x1F1FB;',
	'SX' => '&#x1F1F8;&#x1F1FD;',
	'SY' => '&#x1F1F8;&#x1F1FE;',
	'SZ' => '&#x1F1F8;&#x1F1FF;',
	'TC' => '&#x1F1F9;&#x1F1E8;',
	'TD' => '&#x1F1F9;&#x1F1E9;',
	'TF' => '&#x1F1F9;&#x1F1EB;',
	'TG' => '&#x1F1F9;&#x1F1EC;',
	'TH' => '&#x1F1F9;&#x1F1ED;',
	'TJ' => '&#x1F1F9;&#x1F1EF;',
	'TK' => '&#x1F1F9;&#x1F1F0;',
	'TL' => '&#x1F1F9;&#x1F1F1;',
	'TM' => '&#x1F1F9;&#x1F1F2;',
	'TN' => '&#x1F1F9;&#x1F1F3;',
	'TO' => '&#x1F1F9;&#x1F1F4;',
	'TR' => '&#x1F1F9;&#x1F1F7;',
	'TT' => '&#x1F1F9;&#x1F1F9;',
	'TV' => '&#x1F1F9;&#x1F1FB;',
	'TW' => '&#x1F1F9;&#x1F1FC;',
	'TZ' => '&#x1F1F9;&#x1F1FF;',
	'UA' => '&#x1F1FA;&#x1F1E6;',
	'UG' => '&#x1F1FA;&#x1F1EC;',
	'UM' => '&#x1F1FA;&#x1F1F2;',
	'US' => '&#x1F1FA;&#x1F1F8;',
	'UY' => '&#x1F1FA;&#x1F1FE;',
	'UZ' => '&#x1F1FA;&#x1F1FF;',
	'VA' => '&#x1F1FB;&#x1F1E6;',
	'VC' => '&#x1F1FB;&#x1F1E8;',
	'VE' => '&#x1F1FB;&#x1F1EA;',
	'VG' => '&#x1F1FB;&#x1F1EC;',
	'VI' => '&#x1F1FB;&#x1F1EE;',
	'VN' => '&#x1F1FB;&#x1F1F3;',
	'VU' => '&#x1F1FB;&#x1F1FA;',
	'WF' => '&#x1F1FC;&#x1F1EB;',
	'WS' => '&#x1F1FC;&#x1F1F8;',
	'YE' => '&#x1F1FE;&#x1F1EA;',
	'YT' => '&#x1F1FE;&#x1F1F9;',
	'ZA' => '&#x1F1FF;&#x1F1E6;',
	'ZM' => '&#x1F1FF;&#x1F1F2;',
	'ZW' => '&#x1F1FF;&#x1F1FC;',
];