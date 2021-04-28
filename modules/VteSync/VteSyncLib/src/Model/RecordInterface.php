<?php
/*************************************
 * SPDX-FileCopyrightText: 2009-2020 Vtenext S.r.l. <info@vtenext.com> 
 * SPDX-License-Identifier: AGPL-3.0-only  
 ************************************/

namespace VteSyncLib\Model;

interface RecordInterface {

	public static function fromRawData($data);
	public static function fromCommonRecord(CommonRecord $crecord);
	public function toCommonRecord();

}