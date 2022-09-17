import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {theme} from '@typings/theme';
import SearchIcon from '@components/icons/SearchIcon';
import DismissIcon from '@components/icons/DismissIcon';

interface CommonInputProps {
  currentText: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  clearInput?: () => void;
}

interface CommonInputStylesProps {
  isFocused: boolean;
}

export const CommonInput: React.FC<CommonInputProps> = ({
  setText,
  currentText,
  clearInput,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={commonInputStyles({isFocused}).wrapper}>
      <SearchIcon style={commonInputStyles({isFocused}).leftIcon} />
      <TextInput
        style={commonInputStyles({isFocused}).input}
        placeholderTextColor={theme.colors.inputPlaceholder}
        placeholder={'Search for valuable resources'}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={e => setText(e.nativeEvent.text)}
        value={currentText}
      />
      {!!clearInput && currentText?.length > 0 && (
        <TouchableOpacity
          onPress={clearInput}
          style={commonInputStyles({isFocused}).rightIcon}>
          <DismissIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const commonInputStyles = ({isFocused}: CommonInputStylesProps) => {
  const {
    borderWidthFocused,
    borderWidthUnfocused,
    borderRadius,
    paddingHorizontal,
    paddingVertical,
  } = theme.spacing.commonInput;

  const {inputText} = theme.colors;

  return StyleSheet.create({
    wrapper: {
      justifyContent: 'center',
      paddingVertical: isFocused ? 0 : 1,
      paddingHorizontal: isFocused ? 0 : 1,
    },
    leftIcon: {
      position: 'absolute',
      left: 13,
    },
    rightIcon: {
      position: 'absolute',
      right: 0,
      paddingRight: 13,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: '100%',
      fontSize: 16,
      color: inputText,
      borderWidth: isFocused ? borderWidthFocused : borderWidthUnfocused,
      borderColor: isFocused
        ? theme.colors.inputBorderFocused
        : theme.colors.inputBorderUnfocused,
      borderRadius: borderRadius,
      paddingVertical: paddingVertical,
      paddingHorizontal: paddingHorizontal,
    },
  });
};
