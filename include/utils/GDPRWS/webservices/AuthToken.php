<?php
/*************************************
 * SPDX-FileCopyrightText: 2009-2020 Vtenext S.r.l. <info@vtenext.com> 
 * SPDX-License-Identifier: AGPL-3.0-only  
 ************************************/

// crmv@161554

function gdpr_authtoken($contactid, $user) {
	$GDPRWS = GDPRWS::getInstance();
	return $GDPRWS->generateAuthToken($contactid);
}