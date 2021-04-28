<?php
/*************************************
 * SPDX-FileCopyrightText: 2009-2020 Vtenext S.r.l. <info@vtenext.com> 
 * SPDX-License-Identifier: AGPL-3.0-only  
 ************************************/

require_once 'include/Webservices/Utils.php';
require_once "modules/Users/Users.php";
require_once "include/Webservices/VtenextCRMObject.php";//crmv@207871
require_once "include/Webservices/VtenextCRMObjectMeta.php";//crmv@207871
require_once "include/Webservices/DataTransform.php";
require_once "include/Webservices/WebServiceError.php";
require_once 'include/utils/utils.php';
require_once 'include/Webservices/ModuleTypes.php';
require_once 'include/Webservices/DescribeObject.php';
require_once 'include/Webservices/WebserviceField.php';
require_once 'include/Webservices/EntityMeta.php';
require_once 'include/Webservices/VtenextWebserviceObject.php';//crmv@207871

/* crmv@208173 */

/*
 * An implementation of VTEntityType that uses the webservices api to reflect on vte's types.
 */
class VTWSEntityType{

    private $entityTypeName;
    private $description;
    private $moduleName;
    private $fieldTypes;

    public function __construct($entityTypeName, $user){
        try {
            $describeResult = vtws_describe($entityTypeName, $user);
        } catch (WebServiceException $e) {
        }
		$this->entityTypeName = $entityTypeName;
		$this->description = $describeResult;
	}

    public function usingGlobalCurrentUser($entityTypeName){
		global $current_user;
		return new VTWSEntityType($entityTypeName, $current_user);
	}

    public function forUser($entityTypeName, $user){
		return new VTWSEntityType($entityTypeName, $user);
	}

    public function getFieldNames(){
		if(!isset($this->fieldNames)){
			$fields = $this->description['fields'];
			$arr = array();
			foreach($fields as $field){
				$arr[]=$field["name"];
			}
			$this->fieldNames = $arr;
		}
		return $this->fieldNames;
	}

    public function getFieldLabel($fieldName){
		if(!isset($this->fieldLabels)){
			$this->getFieldLabels();
		}
		return $this->fieldLabels[$fieldName];
	}

    public function getTabId(){
        global $adb,$table_prefix;
        if(!isset($this->tabId)){
            $result = $adb->pquery("select tabid from {$table_prefix}_tab where name=?",
                array($this->entityTypeName));
            $this->tabId = $adb->query_result($result,0,"tabid");
        }
        return $this->tabId;
    }

    public function getModuleName(){
        return $this->moduleName;
    }

    public function getFieldLabels(){
		if(!isset($this->fieldLabels)){
			$fields = $this->description['fields'];
			foreach($fields as $field){
				$this->fieldLabels[$field['name']] = $field['label'];
			}
		}
		return $this->fieldLabels;
	}

    public function getFieldType($fieldName){
		if(!isset($this->fieldTypes[$fieldName])){
			$fields = $this->description['fields'];
			foreach($fields as $field){
				if($field['name'] == $fieldName){
					$type = $field['type'];
					$et = new VTWSFieldType();
					switch($type['name']){
						case 'reference':
							$et->type = 'Related';
							$et->relatedTo = $type['refersTo'];
							break;
						case 'integer':
							$et->type = 'Number';
							$et->format = 'Integer';
							break;
						case 'url':
							$et->type = 'Url';
							break;
                        case 'text':
                        case 'string':
							$et->type = 'String';
							break;
						case 'picklist':
							$et->type = 'Select';
							$et->values = $type['picklistValues'];
							break;
						case 'datetime':
							$et->type = 'DateTime';
							break;
                        case 'a'://Autogenerated type is getting messed up for Accounts
                            $et->type = 'Id';
                            break;
                        case 'date':
                            $et->type = 'Date';
                            break;
                        case 'time':
                            $et->type = 'Time';
                            break;
						case 'email':
							$et->type = 'Email';
							break;
						case 'boolean':
							$et->type = 'Boolean';
							break;
						case 'phone':
							$et->type = 'Phone';
							break;
                        case 'decimal':
                        case 'double':
							$et->type = 'Number';
							$et->format = 'Decimal';
							break;
						case 'autogenerated':
							$et->type = 'Id';
							break;
						case 'owner':
							$et->type = 'Owner';
							break;
                        case 'picklistmultilanguage':
                        case 'multipicklist':
							$et->type = 'Select';
							$et->values = array();
							break;
						case 'skype':
							$et->type = 'Skype';
							break;
						case 'password':
							$et->type = 'Password';
							break;
                        //crmv@add picklistmultilanguage
                        //crmv@add picklistmultilanguage end
						//crmv@14155 i
						case 'file':
							break;
						//crmv@14155 e
						case 'currency':
							$et->type = 'Currency';
							break;
						//crmv@107531
						case 'signature':
							$et->type = 'Signature';
							break;
						//crmv@107531e
						case 'table':
							$et->type = 'Table';
							break;
						default:	
							print_r($type);
							throw new Exception($type["name"]." is not supported yet.");
					}
					$this->fieldTypes[$fieldName] = $et;
					break;
				}
			}
		
		}
		return $this->fieldTypes[$fieldName];
	}

    public function getFieldTypes(){
		$fieldNames = $this->getFieldNames();
		$fieldTypes = [];
		foreach($fieldNames as $fieldName){
			$fieldTypes[$fieldName]=$this->getFieldType($fieldName);
		}
		return $fieldTypes;
	}
	
}

class VTWSFieldType{
    public function toArray(){
		$ro = new ReflectionObject($this);
        $data = [];
        $props = $ro->getProperties();
		foreach($props as $prop){
            $data[$prop->getName()]=$prop->getValue($this);
		}
		return $data;
	}	
}
?>